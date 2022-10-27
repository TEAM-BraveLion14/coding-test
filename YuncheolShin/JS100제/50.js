/**버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.

아래 코드의 빈 칸을 채워 버블 정렬을 완성해 봅시다. */

// 방법 1
function bubble(arr) {
  let result = arr.slice();

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }
  return result;
}

// 방법 2
function selection(arr) {
  let result = arr.slice();

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i + 1; j < result.length; j++) {
      if (result[i] > result[j]) {
        [result[i], result[j]] = [result[j], result[i]];
      }
    }
  }
  return result;
}

const items = prompt('입력해주세요.')
  .split(' ')
  .map((n) => {
    return parseInt(n, 10);
  });

console.log(bubble(items));
console.log(selection(items));
