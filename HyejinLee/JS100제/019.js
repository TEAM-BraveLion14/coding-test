// 문제19 : 제곱을 구하자
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

// 내 코드
// 숫자 두개밖에 없기 때문에 반복문 사용 안했음
const num = prompt('숫자 두개를 입력하세요!', '').split(' ');

let 제곱 = num[0]**num[1]

console.log(제곱);


// 답안
const n = prompt('수를 입력하세요.').split(' ');

console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));