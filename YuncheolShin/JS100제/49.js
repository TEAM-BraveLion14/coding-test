/**순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.*/

const numArr = prompt('10개의 숫자를 공백을 기준으로 입력하세요.').split(' ');

// 1. sort사용
const sortedNumArr = numArr.map((e) => parseInt(e, 10)).sort((a, b) => b - a);

console.log(sortedNumArr[0]);

// 2. Math.max 사용
console.log(Math.max(...numArr));
