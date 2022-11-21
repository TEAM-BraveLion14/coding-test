/**
# 문제78 : 원형 테이블

기린은 중국집에서 친구들과 만나기로 하고, 음식을 시켰습니다.
음식이 나오고 한참을 기다렸지만 만나기로 한 친구 2명이 오지 않았어요.

기린은 배가 너무 고파 혼자 음식을 먹기 시작합니다. 원형 테이블에는 N 개의 음식들이 있습니다.
한 개의 음식을 다 먹으면 그 음식의 시계방향으로 K 번째 음식을 먹습니다.
하지만 아직 오지 않은 친구들을 위해 2개의 접시를 남겨야 합니다.

**마지막으로 남는 음식은 어떤 접시인가요?**
*/

입력은 2개의 정수로 이루어지며 공백으로 구분되어 입력됩니다.
첫 번째 숫자가 음식의 개수 N, 두 번째 숫자가 K입니다.
첫 번째 가져가는 음식이 K 번째 음식이며 나머지는 첫 번째 음식으로부터 시계방향으로 가져갑니다.

입력
6 3


남은 음식들의 번호를 배열의 형태로 출력합니다.

출력
[3, 5]

----------------------------------------------------------

// 내 코드
// n개의 음식 / k 번째 음식 (시계 방향)
const eat = (n, k) => {
    // 총 n개의 접시
    const full = Array(n).fill(0).map((_, i) => i + 1);
    // 먹은 것들
    // 첫 번째 음식은 이미 먹은 상태
    let emptyPlates = [full[0]];
    // emptyPlates.push(full.shift(full[0]));

    // 이렇게 말고.. [0] [2] [0] [2] 반복되도록은 안될까 [❓❓❓]
    full.splice(0, 1)
    emptyPlates.push(full.splice(2, 1))
    emptyPlates.push(full.splice(0, 1))
    emptyPlates.push(full.splice(2, 1))
    
    // console.log(emptyPlates); [1, [4], [2], [6]]

    emptyPlates.flat()

    console.log(full);
}

eat(6, 3)

----------------------------------------------------------
/** 
<코드 한계점>   [❓❓❓]
1. (6, 3)으로 입력되었을 경우에만 답 출력 가능

2.  full.splice(0, 1)
    emptyPlates.push(full.splice(2, 1))
    emptyPlates.push(full.splice(0, 1))
    emptyPlates.push(full.splice(2, 1))

    =>이 부분 너무 억지로 끼워맞췄다.
*/
----------------------------------------------------------

// 답안
const user_input = prompt('입력해주세요').split(' ');
const n = parseInt(user_input[0], 10);
const k = parseInt(user_input[1], 10);

function sol(n, k) {
  let index = 0;
  // q에 n만큼의 숫자를 넣어준다.
  let q = [];
  for(let i = 0; i < n; i++){
    q.push(i + 1);
  }

  while (q.length > 2) {
    if (index > q.length-1) {
      // 순환하다 index가 q의 길이보다 클 경우에 q.length만큼 빼준다.
      // [1,2,3,4,5,6] -> 1다음 4가 빠지고 그 다음은 4+3 = 7(index : 6)이 빠져야 하는데
      // index(현재 빠져야 할 index)가 q.length보다 크므로 q.legnth, 즉 4를 빼준다.
      // 이걸 마지막 2개가 남을 때까지 반복한다.
      index -= q.length;
    }

    q.splice(index, 1);
    index += k;
    index -= 1;
  }

  return q;
}

console.log(sol(n, k));