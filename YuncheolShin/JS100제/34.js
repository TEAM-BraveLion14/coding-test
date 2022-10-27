/**민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
(키는 공백으로 구분하여 입력됩니다.) */

const heights = prompt('학생의 키를 공백을 기준으로 입력하세요.').split(' ');

// 1. sort하고 비교
const sortedHeights = [...heights].sort((a, b) => a - b);

const result = sortedHeights.map((e, index) => {
  if (e !== heights[index]) {
    return false;
  }
  return true;
});

console.log(result, sortedHeights, heights);
result.includes(false) ? console.log('NO') : console.log('YES');

// 2. 앞뒤를 비교 끝까지

function isSorted(heights) {
  for (let i = 0; i < heights.length - 1; i++) {
    if (heights[i] > heights[i + 1]) {
      return false;
    }
  }
  return true;
}

const result1 = isSorted(heights);
result1 ? console.log('YES') : console.log('NO');
