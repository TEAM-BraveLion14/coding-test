/**문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다. */

const inputStr = prompt('문자열을 입력하세요!');
let count = 1;
let result = '';

for (let i = 1; i <= inputStr.length; i++) {
  if (inputStr[i - 1] === inputStr[i]) {
    count += 1;
  } else {
    result += `${inputStr[i - 1] + count}`;
    count = 1;
  }
}

console.log(result);
