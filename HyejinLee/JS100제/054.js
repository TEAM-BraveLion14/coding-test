// # 문제54 : 연속되는 수

// 은주는 놀이공원 아르바이트를 하고 있다. 은주가 일하는 놀이공원에서는 현재 놀이공원 곳곳에 숨겨진 숫자 스탬프를 모아 오면 선물을 주는 이벤트를 하고 있다. 숫자 스탬프는 매일 그 수와 스탬프에 적힌 숫자가 바뀌지만 그 숫자는 항상 연속된다. 
// 그런데 요즘 다른 날에 찍은 스탬프를 가지고 와 선물을 달라고 하는 손님이 늘었다.

// 스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오

입력1
1 2 3 4 5

출력1
YES


입력2
1 4 2 6 3

출력2
NO

// 내 코드
// 정렬부터 끝내놓고 시작
const check = prompt('스탬프 확인합니다.').split(' ').map(Number).sort((a, b) => a - b);

// 만약 check.length로 해놓으면 길이가 3이라고 가정했을 때, check[i + 1]부분은 check[3]까지 확인해야 하는 거임 하지만 길이 3에서는 0, 1, 2까지만 확인이 가능하므로 -1을 해줌 [❓❓❓]
const checkStamp = check => {
    for(let i = 0; i < check.length - 1; i++){
        // 처음에는 ===으로 두고 return 'YES'로 작성했는데, 오류가 나서 생각해보니까 1 2 5 7 9 이렇게 입력을 하면 YES로 반환하고 끝내버림 따라서 처음부터 !==로 오류를 잡아내면 맞게 출력됨 [❓❓❓]
        if(check[i] + 1 !== check[i + 1]){
            return 'NO'
        }
    }
    return 'YES'
}

console.log(checkStamp(check));


// 답안
function sol(l){
    l.sort((a,b) => {
      return a-b;
    });
  
    for (let i=0; i<l.length-1; i++){
      if(l[i]+1 !== l[i+1]){
        return 'NO';
      }
    }
    return 'YES';
  }
  
  const n = prompt('입력해주세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(sol(n));