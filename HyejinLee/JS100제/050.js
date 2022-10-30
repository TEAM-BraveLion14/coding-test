// 문제50 : 버블정렬 구현하기

// 버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.

// 아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다.

function bubble(arr) {
    let result = arr.slice();  // 원본 배열을 건드리지 않고 새로운 배열을 만들어 그것을 편집

    for (let i = 0; i < result.length - 1; i++) {
      for (/*빈칸을 채워주세요.*/) {
        if (result[j] > result[j + 1]) {
           //빈칸을 채워주세요.
        }
      }
    }
    return result;
  }
  
  const items = prompt('입력해주세요.').split(' ').map((n) => {
    return parseInt(n, 10);
  });
  
  console.log(bubble(items));


// 내 코드
  function bubble(arr) {
    let result = arr.slice(); 

    for (let i = 0; i < result.length - 1; i++) {
      for (let j = 0; /*설명*/; j++) {  // 빈칸 1   [❓❓❓]
        if (result[j] > result[j + 1]) {
             [result[j], result[j + 1] = result[j + 1], result[j]] // 빈칸 2
        }
      }
    }
    return result;
  }
  
  const items = prompt('입력해주세요.').split(' ').map((n) => {
    return parseInt(n, 10);
  });
  
  console.log(bubble(items));

// 참고: 배열 순서 바꾸기
// https://grahams.tistory.com/329


// 답안
function bubble(arr) {
    let result = arr.slice(); // 원본 배열 복사
  
    for (let i = 0; i < result.length - 1; i++) {
      for (let j = 0; j < result.length - i; j++) { // result[j+1]이 undefined가 되더라도 비교 연산자에서 false를 반환 따라서 영향 X  만약 undefined 나오는 것이 마음에 들지 않는다면 result.length - i -1 까지 해주셈 [❓❓❓]
        if (result[j] > result[j + 1]) {
          let temp = result[j];
          result[j] = result[j+1];
          result[j+1] = temp;
        }
      }
    }
    return result;
  }
  
  const items = prompt('입력해주세요.').split(' ').map((n) => {
    return parseInt(n, 10);
  });
  
  console.log(bubble(items));