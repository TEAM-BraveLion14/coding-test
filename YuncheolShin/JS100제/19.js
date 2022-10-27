const input = prompt('공백을 기준으로 두 숫자를 입력하세요.');

const [a, b] = input.split(' ');

console.log(Math.pow(+a, +b));
