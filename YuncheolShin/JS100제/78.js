/**기린은 중국집에서 친구들과 만나기로 하고, 음식을 시켰습니다.
음식이 나오고 한참을 기다렸지만 만나기로 한 친구 2명이 오지 않았어요.

기린은 배가 너무 고파 혼자 음식을 먹기 시작합니다. 원형 테이블에는 N 개의 음식들이 있습니다.
한 개의 음식을 다 먹으면 그 음식의 시계방향으로 K 번째 음식을 먹습니다.
하지만 아직 오지 않은 친구들을 위해 2개의 접시를 남겨야 합니다.

마지막으로 남는 음식은 어떤 접시인가요?*/

// [1,2,3,4,5,6,7,8] => [1,2,4,5,6,7,8] => [1,2,4,5,7,8] => [2,4,5,7,8]
// => [2,4,7,8] => [4,7,8] => [4,7]

const n = 6; // 음식의 개수
const k = 3; // 시계방향으로 먹을 음식
let curFood = k - 1;

let foodArr = Array(n)
  .fill(0)
  .map((_, i) => i + 1);

while (foodArr.length > 2) {
  foodArr.splice(curFood, 1);
  curFood -= 1;

  let count = 0;
  while (count < k) {
    curFood += 1;
    count += 1;
    if (curFood === foodArr.length) {
      curFood = 0;
    }
  }
}

console.log(foodArr);

// const foodSet = new Set();
// for (let i = 1; i <= n; i++) {
//   foodSet.add(i);
// }

// // console.log(foodSet);

// // while (foodSet.size > 2) {
// //   console.log(curFood);
// //   foodSet.delete(curFood);

// //   curFood + k > n ? (curFood = curFood + k - n + 1) : (curFood += k);
// // }

// while (foodSet.size > 2) {
//   console.log(curFood);
//   console.log(foodSet);
//   foodSet.delete(curFood);

//   if (curFood + k > n) {
//     curFood -= foodSet.size;
//   } else {
//     curFood += k;
//   }
// }
// console.log(foodSet);
