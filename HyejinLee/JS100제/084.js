/**
# 문제84 : 숫자뽑기

소정이는 어떤 숫자에서 k개의 수를 뽑았을 때 가장 큰 수를 찾는 놀이를 하고 있습니다. 
예를 들어, 숫자 1723에서 두 개의 수를 뽑으면 [17, 12, 13, 72, 73, 23]을 만들 수 있습니다.
이 중 가장 큰 수는 **73**입니다.

위 예시처럼 **어떤 수 n에서 k개의 수를 선택하여 만들 수 있는 수 중에서 가장 큰 수**를 찾아 주세요.
*/

----------------------------------------------------------

// 내 코드
// 뽑은 숫자가 중복되더라도 앞 뒤 순서에 따라 다름 따라서 '순열' 활용
const numArr = prompt('숫자를 적어주세요.').split('');
const cnt = parseInt(prompt('몇개씩 묶을 것인지 입력해주세요.'), 10);
const pick = (numArr, cnt) => {
    let result = [];
    if(cnt === 1){
        return numArr.map((v) => [v]);
    }

    numArr.forEach((fixed, index, arr) => {
        // fixed 제외 나머지 배열 
        const rest = [...arr.slice(0, index), ...arr.slice(index + 1)]
        // 나머지에 관한 순열 구하기
        const permu = pick(rest, cnt - 1);
        // 고정값 (기준값)과 나머지 순열 값 붙이기
        const attached = permu.map((i) => [fixed, ...i]);
        result.push(...attached);

    });

    return result;
}

pick(numArr, cnt)       // [Array(2), Array(2), ...Array(2)]

const output = pick(numArr, cnt)

let arrOutput = []
for(let i = 0; i < output.length; i++){
    arrOutput.push(output[i].join(''))
}

// console.log(arrOutput);     // ['17', '12', '13', ...'32']

const abc = arrOutput.map(Number)   
// [❓❓❓] 주의) map(Number)도 결국 map함수이므로 새로운 배열 반환함

// console.log(abc);        // [17, 12, 13, ...32]

const maxNum = Math.max(...abc);

console.log(maxNum);    // 73

----------------------------------------------------------

// 답안
function solution(chars) {
    let permute = [];
  
    const f = (prefix, chars) => {
      for (let i=0; i<chars.length; i++) {
        permute.push(prefix + chars[i]);
  
        if (permute.indexOf(chars[i] + prefix) === -1) {
          permute.push(chars[i] + prefix);
        }
  
        f(prefix + chars[i], chars.slice(i + 1));
      }
    }
  
    f('', chars);
  
    let result = permute.filter(x => x.length === len);
    result.sort((a, b) => {return b-a});
  
    return result[0];
  }
  
  const num = prompt('숫자를 입력하세요').split('');
  const len = parseInt(prompt('몇 개의 수를 선택하시겠습니까?'),10);
  console.log(solution(num));