/**정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.

예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

입력
정량 N이 입력됩니다.

출력
가장 적게 옮길 수 있는 횟수를 출력합니다.
만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다.*/

//dp
const weight = parseInt(prompt('무게를 입력하세요.(숫자)'));

let count = 0;

const dp = new Array(weight + 1).fill(0);
dp[3] = 1;
dp[7] = 1;

for (let i = 3; i < dp.length; i++) {
  if (i % 7 === 0) {
    dp[i] = dp[i - 7] + 1;
  } else if (i % 3 === 0) {
    dp[i] = dp[i - 3] + 1;
  } else if ((i % 7) % 3 === 0) {
    dp[i] = dp[i - 7 * Math.floor(i / 7)] + dp[7 * Math.floor(i / 7)];
  }
}

console.log(dp[weight]);
for (let i = 0; i < dp.length; i++) {
  console.log(`${i} : ${dp[i]}`);
}

/**const weight = parseInt(prompt('무게를 입력하세요.(숫자)'));

let count = 0;

function getTotalCount(count, weight) {
  while (weight > 0) {
    if (weight % 7 === 0) {
      count += weight / 7;
      return count;
    }

    weight -= 3;
    count += 1;
  }
  return weight === 0 ? count : -1;
}

console.log(getTotalCount(count, weight));
*/
