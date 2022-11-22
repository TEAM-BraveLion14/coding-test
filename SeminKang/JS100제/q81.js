/**지뢰를 찾는 문제입니다. 다음 그림처럼 깃발 주위에는 지뢰가 사방으로 있습니다. **깃발의 위치를 입력받아 지뢰와 함께 출력 해주는 프로그램**을 만드세요.

- 아래 Case 외 예외 사항은 고려하지 않습니다.
(예를 들어 깃발이 붙어 있을 경우는 고려하지 않습니다.) 
실력이 되시는 분들은 깃발이 붙어있을 상황까지 고려해 주세요.

let flag = []; //지뢰 없이 깃발만 있는 리스트
let minesweeper = []; //지뢰를 찾은 리스트
let count = 0;

console.log(flag);
console.log(minesweeper);

map[1,1] => 1 => map[0,1], map[2,1], map[1,0], map[1,2] => *
입력
0 1 0 0 0
0 0 0 0 0
0 0 0 1 0
0 0 1 0 0
0 0 0 0 0
//"0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0"

출력
* f * 0 0
0 * 0 * 0
0 0 * f *
0 * f * 0
0 0 * 0 0
*/

// 배운점 => for in 은 index를 문자열로 취급하고, 기본 for문은 index를 숫자로 취급함

//https://www.notion.so/81-c77c957d8da548cfb533d5e2eaddf5ac

const map = '0 1 0 0 1\n0 0 0 0 0\n0 0 0 1 0\n0 0 0 0 0\n0 0 1 0 0'
  .split('\n')
  .map((e) => e.split(' '));

const rowLen = map.length;
const colLen = map[0].length;

for (let i in map) {
    i = parseInt(i);
  for (let j in map[i]) {
    if (map[i][j] === '1') {
      map[i][j] = 'f';

    //   i = parseInt(i);
      j = parseInt(j);

      try {
        if (i - 1 === -1) {
          throw 'error';
        }
        map[i - 1][j] = '*';
      } catch (e) {}

      try {
        if (j - 1 === -1) {
          throw 'error';
        }
        map[i][j - 1] = '*';
      } catch (e) {}

      try {
        if (j + 1 === colLen) {
          throw 'error';
        }
        map[i][j + 1] = '*';
      } catch (e) {}

      try {
        if (i + 1 === rowLen) {
          throw 'error';
        }
        map[i + 1][j] = '*';
      } catch (e) {}
    }
  }
}

const map = '0 1 0 0 0\n0 0 0 0 0\n0 0 0 1 0\n0 0 1 0 0\n0 0 0 0 0'
  .split('\n')
  .map((e) => e.split(' '));

const rowLen = map.length;
const colLen = map[0].length;

for (let i = 0; i < rowLen; i++) {
  for (let j = 0; j < colLen; j++) {
    if (map[i][j] === '1') {
      if (i - 1 !== -1) {
        map[i - 1][j] = '*';
      }
      if (i + 1 !== rowLen) {
        map[i + 1][j] = '*';
      }
      if (j - 1 !== -1) {
        map[i][j - 1] = '*';
      }
      if (j + 1 !== 1) {
        map[i][j + 1] = '*';
      }

      map[i][j] = 'f';
    }
  }
}