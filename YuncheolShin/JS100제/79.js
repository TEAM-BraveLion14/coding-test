/**
리스트가 주어졌을 때
=> l = [10, 20, 25, 27, 34, 35, 39]

n번 순회를 결정합니다. 예를 들어 2번 순회하면
=> l = [35, 39, 10, 20, 25, 27, 34]

여기서 변하기 전 원소와 변한 후 원소의 값의 차가 가장 작은 값을 출력하는 프로그램을 작성하세요.

예를 들어 2번 순회했을 때 변하기 전의 리스트와 변한 후의 리스트의 값은 아래와 같습니다.

**순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]
리스트의_차 = [25, 19, 15, 7, 9, 8, 5]**

39와 변한 후의 34 값의 차가 5이므로 리스트의 차 중 최솟값입니다. 따라서 39와 34의 인덱스인 6과 39와 34를 출력하는 프로그램을 만들어주세요.*/
const list = [10, 20, 25, 27, 34, 35, 39];

const n = Number(prompt('순회할 횟수를 입력하세요.'));

const newList = list.slice(-n).concat(list.slice(0, -n));

const minusMap = new Map();

list.forEach((el, index) => {
  minusMap.set(Math.abs(el - newList[index]), [index, el, newList[index]]);
});

console.log(minusMap);
//Map(7) {25 => Array(3), 19 => Array(3), 15 => Array(3), 7 => Array(3), 9 => Array(3), …}

const result = [...minusMap].sort((a, b) => a[0] - b[0])[0];
/**[5, Array(3)] [7, Array(3)] [8, Array(3)] [9, Array(3)] [15, Array(3)] [19, Array(3)] [25, Array(3)] */

const index = `${result[1][0]}`;
const value = `${result[1][1]}, ${result[1][2]}`;

console.log(index, value);
