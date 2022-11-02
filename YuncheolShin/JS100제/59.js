/**총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.*/

const userInput = prompt('길이 50이하의 문자열을 입력하세요.');

const result = new Array(50).fill('=');

result.splice(
  Math.floor(result.length / 2) - Math.round(userInput.length / 2),
  userInput.length,
  userInput
);

console.log(result.join(''));
