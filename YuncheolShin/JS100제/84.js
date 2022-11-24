/**소정이는 어떤 숫자에서 k개의 수를 뽑았을 때 가장 큰 수를 찾는 놀이를 하고 있습니다. 
예를 들어, 숫자 1723에서 두 개의 수를 뽑으면 [17, 12, 13, 72, 73, 23]을 만들 수 있습니다.
이 중 가장 큰 수는 73입니다.

위 예시처럼 어떤 수 n에서 k개의 수를 선택하여 만들 수 있는 수 중에서 가장 큰 수를 찾아 주세요. */

// 문제가 조금 이상 => 두개의 수를 뽑으면 17도 가능하고 71도 가능 => 순열

// 방법 1. for문 1123 같은 경우 처리
// const number = 1723;

// const numStr = String(number);
// const result = [];
// for (let i in numStr) {
//   for (let j in numStr) {
//     if (i === j) continue;
//     result.push(parseInt(numStr[i] + numStr[j]));
//   }
// }

// console.log(result);
// console.log(Math.max(...result));

// 방법 2. 순열
const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results;
};

const number = 1723;

const numStr = String(number).split('');

const permutations = getPermutations(numStr, 2);
const result = permutations.map((e) => parseInt(e.join('')));
console.log(result);
console.log(Math.max(...result));
