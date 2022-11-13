/**행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요. */

// 곱할 수 있는 행렬 => (n * m), (m * k)

// 0행 곱하기 0열, 1행 곱하기 1열 ...

const a = [
  [1, 2],
  [2, 4],
];

const b = [
  [1, 0, 3],
  [0, 3, 4],
];

// a(2*2) b(2*3)
/*
a[0][0] * b[0][0] + a[0][1] * b[1][0];
a[0][0] * b[0][1] + a[0][1] * b[1][1];
a[0][0] * b[0][2] + a[0][1] * b[1][2];

a[1][0] * b[0][0] + a[1][1] * b[1][0];
a[1][0] * b[0][1] + a[1][1] * b[1][1];
a[1][0] * b[0][2] + a[1][1] * b[1][2];
*/

const getMatrixMul = (a, b) => {
  //2
  const aColLen = a[0].length;
  //2
  const bRowLen = b.length;

  //2
  const aRowLen = a.length;
  //3
  const bColLen = b[0].length;

  let result = [];

  if (aColLen === bRowLen) {
    for (let i = 0; i < aRowLen; i++) {
      const row = [];
      for (let j = 0; j < bColLen; j++) {
        let tmpSum = 0;
        for (let k = 0; k < aColLen; k++) {
          tmpSum += a[i][k] * b[k][j];
        }
        row.push(tmpSum);
      }
      result.push(row);
    }
  } else if (aRowLen === bColLen) {
    for (let i = 0; i < bRowLen; i++) {
      const row = [];
      for (let j = 0; j < aColLen; j++) {
        let tmpSum = 0;
        for (let k = 0; k < bColLen; k++) {
          tmpSum += b[i][k] * a[k][j];
        }
        row.push(tmpSum);
      }
      result.push(row);
    }
  } else {
    return -1;
  }

  return result;
};
