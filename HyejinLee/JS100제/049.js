// 문제49 : 최댓값 구하기

// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

입출력

입력 : 10 9 8 7 6 5 4 3 2 1
출력 : 10


// 내 코드
const inputNum = prompt('10개의 숫자를 공백을 유지하여 입력하세요.').split(' ').map(Number);

console.log(Math.max(...inputNum));


// Math.max()
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// 배열로 들어왔을때는 spread operater를 사용 [❓❓❓]


// 답안
let numbers = prompt('10개의 숫자를 입력하세요').split(' ').map((n) => {
    return parseInt(n, 10);
  });
  
  numbers.sort((a, b) => {
    return b-a;
  });
  
  console.log(numbers[0]);