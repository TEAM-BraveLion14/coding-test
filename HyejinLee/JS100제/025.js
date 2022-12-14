// 문제25 : 원의 넓이를 구하세요
// 원의 넓이는 반지름의 길이 x 반지름의 길이 x 3.14로 구할 수 있습니다.
// 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.

// 입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수를 만들어 주세요.


// 내 코드
const n = prompt('원의 넓이를 구하기 위해 반지름의 길이를 입력해주세요.');

const circle = n => n * n * 3.14;

console.log(circle(n));

// 좀 더 의미있는 변수명으로 짓기 

// 답안
function circle(n) {
    const result = n * n * 3.14;
  
    return result;
  }
  
  const r = prompt("원의 반지름을 입력하세요.");
  
  console.log(circle(r));