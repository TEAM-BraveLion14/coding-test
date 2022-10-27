/**문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.*/

const str = prompt('대문자와 소문자로 이루어진 하나의 문자열을 입력하세요.');
let result = '';

for (let i = 0; i < str.length; i++) {
  str[i] === str[i].toUpperCase()
    ? (result += str[i].toLowerCase())
    : (result += str[i].toUpperCase());
}

console.log(result);
