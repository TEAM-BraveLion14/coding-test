// 문제20 : 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

입출력

입력 : 10 2
출력 : 5 0

// 내 코드
const nums = prompt('숫자 두개의 몫과 나머지를 구하려고 합니다.', '').split(' ');

const firstNum = nums[0];
const secondNum = nums[1];

console.log(Math.floor(secondNum/firstNum), secondNum%firstNum);
//=>몫은 무조건 소숫점 버리는 거 생각해야함 따라서 Math.floor 붙이기


// 답안
const n = prompt('수를 입력하세요.').split(' ');

const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
const left = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(result, left);