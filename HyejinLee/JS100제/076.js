/**
 
 # 문제76 : 안전한 땅
전쟁이 끝난 후, A 나라에서는 폐허가 된 도시를 재건하려고 한다. 그런데 이 땅은 전쟁의 중심지였으므로 전쟁 중 매립된 지뢰가 아직도 많이 남아 있다는 것이 판명되었다. 
정부는 가장 먼저 지뢰를 제거하기 위해 수색반을 꾸렸다.

수색반은 가장 효율적인 지뢰 제거가 하고 싶다. 수색반은 도시를 격자무늬로 나눠놓고 자신들이 수색할 수 있는 범위 내에 가장 많은 지뢰가 매립된 지역을 가장 먼저 작업하고 싶다.

가장 먼저 테스트 케이스의 수를 나타내는 1이상 100 이하의 자연수가 주어진다.
각 테스트 케이스의 첫 줄에는 수색할 도시의 크기 a와 수색반이 한 번에 수색 가능한 범위 b가 주어진다. (a와 b 모두 정사각형의 가로 또는 세로를 나타낸다. 예를 들어 10이 주어지면 10x10칸의 크기를 나타낸다.)

그 후 a 줄에 걸쳐 도시 내 지뢰가 있는지의 여부가 나타난다. 
0은 지뢰가 없음 1은 지뢰가 있음을 뜻한다.

각 테스트 케이스에 대해 수색 가능한 범위 bxb 내에서 찾아낼 수 있는 가장 큰 지뢰의 개수를 구하라.
*/

입력
1
5 3
1 0 0 1 0
0 1 0 0 1
0 0 0 1 0
0 0 0 0 0
0 0 1 0 0

출력
3

----------------------------------------------------------

// 내 코드
const arr = [[1, 0, 0, 1, 0], 
            [0, 1, 0, 0, 1], 
            [0, 0, 0, 1, 0], 
            [0, 0, 0, 0, 0], 
            [0, 0, 1, 0, 0]];

// 수정필요 [❓❓❓]

const result = (arr, check) => {
  let newnew = []
  // arr 가로 기준
  for(let i = 0; i <= (arr.length)-check; i++){
    // arr 세로 기준
    for(let j = 0; j <= (arr.length)-check; j++){
      // check 가로 기준
      for(let k = i; k <= i + check - 1; k++){
        // check 세로 기준
        for(let l = j; l <= j + check - 1; l++){
          newnew.push(arr[j][k]);
        }
      }
    }
  }
  // console.log(newnew);
}

result(arr, 3)

// 배열에서 1이 들어간 것의 개수


// 1이 가장 많은 것 선택


----------------------------------------------------------
{/* 
<시도 방법> => 모든 상황을 다 설정 해줘야 함
// 0~2
// 1~3
// 2~4

// case 0~2
let compare1= [];
let compare2= [];
let compare3 = [];
for(let i = 0; i <= 2; i++){
    for(let j = 0; j <= 2; j++){
        compare1 += arr[i][j]
    }
    for(let j = 1; j <= 3; j++){
        compare2 += arr[i][j]
    }
    for(let j = 2; j <= 4; j++){
        compare3 += arr[i][j]
    }
}
console.log(compare1);
console.log(compare2);
console.log(compare3);


case 1~2


case 2~4 
*/}
----------------------------------------------------------

// 답안
let 사각형 = 5;
let 탐색가능지역 = 3;
let 지뢰밭 = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0]
];

let iadd = 0;
let jadd = 0;
let value = 0;
let valueArray = [];
for (let iadd = 0; iadd <= 사각형 - 탐색가능지역; iadd++) {
  for (let jadd = 0; jadd <= 사각형 - 탐색가능지역; jadd++) {
    for (let i = iadd; i <= 탐색가능지역 - 1 + iadd; i++) {
      for (let j = jadd; j <= 탐색가능지역 - 1 + jadd; j++) {
        // console.log(i, j);
        value += 지뢰밭[i][j];
      }
    }
    valueArray.push(value);
    console.log("---------");
    value = 0;
  }
  console.log("!!!!!!!");
}

console.log(valueArray);
console.log(Math.max.apply(null, valueArray));