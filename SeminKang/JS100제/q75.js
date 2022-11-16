// # 문제75 : 이상한 369

// 369 게임을 하는데 조금 이상한 규칙이 있습니다. 3이나 6, 9 일 때만 박수를 쳐야합니다. 예를 들어 13, 16과 같이 3과 6, 9 만으로 된 숫자가 아닐 경우엔 박수를 치지 않습니다.
// 수현이는 박수를 몇 번 쳤는지 확인하고 싶습니다. 36일 때 박수를 쳤다면 박수를 친 횟수는 5번입니다.

// n을 입력하면 박수를 몇 번 쳤는지 그 숫자를 출력해주세요.

/**숫자가 3, 6 ,9만 포함,
 * 입력값을 받아 1 ~ 입력값까지 카운트 증가하면서 체크
 */
// 정규식도 있을거같고 받은 문자열 

// 받은 문자열을 숫자로 바꾸고 count 자체를 input이랑 동일시? 3,6,9에 해당하지 않으면 카운트 다운 


// 방법 1 정규식
const input = Number(prompt("1이상 숫자를 입력하세요!"));
let arrInput = Array(input).fill(0).map((_, i) => i + 1)
let count = 0;

const reg = /[369]/g;

const re = arrInput.forEach((e) => {
  const str = e.toString();
  if(str.match(reg)){
    if(str.length === str.match(reg).length){
      count++;
    };
  }
 
})


// 방법 2 includes, set 중복 제거
const input = Number(prompt("1이상 숫자를 입력하세요!"));

let result = []

for(let i = 1; i <= input; i++){
  ["1","2","4","5","7","8","0"].forEach(e => {
    if(i.toString().includes(e)) {
        result.push(i)
    }
  })
}

console.log(input - new Set(result).size);


// 답안 (자리수 별 나눠 풀이)
function sol(n){
  let answer = 5;
  let count = 3;
  const d = {3 : 1, 6 : 2, 9 : 3};

  while (n.length !== 0){
      answer += d[parseInt(n.pop(), 10)] * count;
      count *= 3;
  }       
  return answer;
}

const user_input = prompt('입력해주세요').split('');

console.log(sol(user_input));