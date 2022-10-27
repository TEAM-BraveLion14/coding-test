/**사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요

예를들어
18234 = 1+8+2+3+4 이고 정답은 18 입니다.
3849 = 3+8+4+9 이고 정답은 24입니다. */

let num = prompt('양의 정수를 입력하세요.');

// 1 배열로 변환 후 하나씩 합치기
console.log(
  num
    .split('')
    .map((e) => parseInt(e, 10))
    .reduce((acc, cur) => (acc += cur))
);

// 자동형변환과 나머지, 나눗셈으로 처리
let result = 0;

while (num > 0) {
  result += num % 10;
  num = Math.floor(num / 10);
}

console.log(result);
