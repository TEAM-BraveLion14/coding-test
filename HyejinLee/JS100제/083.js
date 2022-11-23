/**# 문제83 : 수학 괄호 파싱 2

수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다.
괄호는 소괄호와 중괄호가 있습니다.

입출력 예시
데이터 입력(1), 프로그램 종료(2) : 1
데이터를 입력하세요: 5 + 7 * {(3 * 5)}
True

데이터 입력(1), 프로그램 종료(2) : 1
데이터를 입력하세요: 5 + 7){ * (3 * 5)
False

데이터 입력(1), 프로그램 종료(2) : 2

function math(e){
    
		//코드를 작성해주세요
}

while (1){
    const order = prompt('데이터 입력(1), 프로그램 종료(2)');
    if (order == '1'){
        const ex = input('데이터를 입력하세요');
        console.log(math(ex));
    } else {
        break;
    }
}
*/
// {5 + (7)} * {(3 * 5)}
// {5 + 7(}) * {(3 * 5)}
// {5 + 7}() * {(3 * 5)}
// {({}({}))} => [{] => [{, (] =>  [{, (, {] => [{, (, {, }](올바른 괄호 발견) => [{, (] => [{, (, {]

// {5 + (3 + 7)} * {(3 * 5)}
// ({{1} )( + 2})
// 5 ( + 7) * (3 * 5)

const arr = '{5 + (7)} * {(3 * 5)}';
const arr2 = '({{1} )( + 2})';
let bracketArr = arr.match(/[)(}{]/g);
// const bracketArr = arr.split('').filter((e) => e === ')' || e === '(' || e === '{' || e === '}');

const isCorrectBracket = () => {
  const leftBracket = ['(', '{'];
  const rightBracket = [')', '}'];
  
  if (bracketArr[0] === ')' || bracketArr[0] === '}') {
    return false;
  }

  for(let i = 0; i < bracketArr.length - 1; i++){
    if(leftBracket.includes(bracketArr[i]) && leftBracket.indexOf(bracketArr[i]) === rightBracket.indexOf(bracketArr[i+1])){
      bracketArr.splice(i, 2);
      i = -1;
    }
  }
  
  return bracketArr.length === 0 ? true : false;
}

/*
function math(e){
    let bracketArr = e.match(/[)(]/g);
    bracketArr = bracketArr || "null";
    if (bracketArr === "null"){
        return true;
    }
    let str = bracketArr.join("");

    if (str[0] === ")" || str[0] === "}"){ 
        return false;
    } else if (!(/\(/gm.test(str) && /\)/gm.test(str))){
        return false;
    } else if (
        str.match(/\(/gm).length !== str.match(/\)/gm).length
    ) {
        return false;
    } else {
        while(str.length > 0){
            if (str.indexOf("(") < str.indexOf(")")){
                const bracket1stI = str.indexOf("(");
                str = str.replace(str[bracket1stI], '');
                const bracket2ndI = str.indexOf(")");
                str = str.replace(str[bracket2ndI], '');
            } else {
                return false;
            }
        }
        return true;
    }
}
    
while (1){
    let order = parseInt(prompt('데이터 입력(1), 프로그램 종료(2)'), 10);
    if (order === 1){
        const ex = prompt('데이터를 입력하세요');
        console.log(math(ex));
    } else {
        break;
    }
}

*/