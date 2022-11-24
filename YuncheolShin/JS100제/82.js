/**
수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다. 괄호는 소괄호밖에 없습니다.

데이터 입력(1), 프로그램 종료(2) : 1
데이터를 입력하세요: 3 + 5
True


데이터 입력(1), 프로그램 종료(2) : 1
데이터를 입력하세요: 5 + 7) * (3 * 5)
False
*/

// function math(ex){

//   //코드를 작성해주세요

// }

// while (1){
//   let order = prompt('데이터 입력(1), 프로그램 종료(2)');
//   if (order === 1){
//       const ex = prompt('데이터를 입력하세요');
//       console.log(math(ex));
//   } else {
//       break;
//   }
// }

// ((5)) + (5) + (7) => (o)
// (7 + (65)) => (o)
// ())7 + ((())(() + 5 => (x)
// (7 + 5()) => (x);
// (7 + ()) + 5 => (x)
// (7 + )() + 5 이런것도 판별해야하나..

// 접근 1
// (()(())) 이 있을때 배열로 변환하면 [(, (, ), (, (, ), ), )]로 쌓이는데 하나씩 stack에 담으면서 쌍이 맞을때 삭제(shift, push로 진행)
// => [(] => [(, (] => [(, (, )] => (한쌍 완성) => [(] => [(, (] =>...

// 예외 => [), (, (, )]
const arr1 = '((5)) + (5) + (7)';
const arr2 = '(7 + ()) + 5';

const bracketArr = arr1.split('').filter((e) => e === ')' || e === '(');

if (arr1.includes('()')) console.log('False');

function isCorrectMath() {
  const stack = [];

  if (bracketArr[0] === ')' || bracketArr[bracketArr.length - 1] === '(') {
    return false;
  }

  while (bracketArr.length > 0) {
    const curBracket = bracketArr.shift();

    if (stack[stack.length - 1] + curBracket === '()') {
      stack.pop();
    } else {
      stack.push(curBracket);
    }
  }

  console.log(stack);
  return stack.length === 0 ? true : false;
}
