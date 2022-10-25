// 문제18 : 평균 점수
// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요. 
// 단, 소숫점 자리는 모두 버립니다.

// 입출력

// 입력 : 20 30 40
// 출력 : 30

// 내 코드
const input = prompt('점수를 입력하세요.', '').split(' ');
let sum = 0;

for(let i = 0; i < input.length; i++){
    sum += parseInt(input[i]);
}

console.log(Math.floor(sum / input.length));

// 내 코드 2
const input = prompt('점수를 입력하세요.', '').split(' ');

const firstNum = parseInt(input[0])
const secondNum = parseInt(input[1])
const thirdNum = parseInt(input[2])

const sum = firstNum + secondNum + thirdNum;

const average = sum / input.length;

console.log(average);

// 내 코드 3
const input = prompt('점수를 입력하세요.').split(' ');
let sum = 0;

// 키 값 반환
for(let i in input){
  sum += parseInt(input[i])
}
console.log(Math.floor(sum / input.length));

// 나중에 for of도 사용해보기 (바로 값으로 계산할 수 있도록)

// 답안
const scores = prompt('세 과목의 점수를 입력하세요.').split(' ');
let sum = 0;

for (let i=0; i<3; i++){
  sum += parseInt(scores[i], 10); // 십진수의 형태의 숫자로 데이터 타입을 변환합니다.
}

console.log(Math.floor(sum/3)); //Math.floor 메서드는 소수점 자리를 모두 버림합니다.

// 답안 2
const score = prompt().split(' ');
let sum = 0;

for(let i = 0; i < score.length; i++){
    sum = sum + parseInt(score[i], 10);
}
console.log(Math.floor(sum / score.length));