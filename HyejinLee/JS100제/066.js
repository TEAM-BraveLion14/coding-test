/**
# 문제66 : 블럭탑쌓기

탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
순서에 맞게 쌓지 않으면 무너질 수 있습니다.

예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

- B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
- B 다음 블럭이 C가 될 수 있습니다.

쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

1. 블럭은 알파벳 대문자로 표기합니다.
2. 규칙에 없는 블럭이 사용될 수 있습니다.
3. 중복된 블럭은 존재하지 않습니다.
*/

입력
탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
규칙 = "ABD"

출력
["가능", "불가능", "가능", "가능", "가능"]

----------------------------------------------------------

[다시 풀어보기📛📛📛]

// 내 코드
const tower = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = "ABD";

const result = tower.map(x => {
    for(let i = 0; i < rule.length; i++){
          // x.indexOf(rule[i]) === -1 는 "EFGHZ" 고려
        if((x.indexOf(rule[i]) < x.indexOf(rule[i + 1])) || (x.indexOf(rule[i]) === -1)){
            return '가능'
        }else{
            return '불가능'
        }
    }
})

console.log(result);

// "ADEFQRX"가 '불가능'으로 나오는 걸 봐서 x.indexOf(rule[i]) < x.indexOf(rule[i + 1]) 이 조건에서 걸린듯하다. 그렇다고 해서 x.indexOf(rule[i]) < x.indexOf(rule[i + 2])를 해버리면 "BCAD"도 가능으로 나오게 된다. [❓❓❓]

----------------------------------------------------------

// 내 코드 (수정 전 코드)

const tower = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = prompt('알파벳 대문자를 입력하세요').toUpperCase().split('')   // 규칙 1 대문자
	
const output = [];
	
for(let i = 0; i < tower.length; i++){
  let arrSplitTower = tower[i].split('');   // tower 내 알파벳 비교 위한 작업
		
  let str = '';   // for문 반복 탈출, 일치하는 문자 담아놓기
	for(let j = 0; j < arrSplitTower.length; j++){
		if(rule.includes(arrSplitTower[j])){
			str += arrSplitTower[j];
		}
	}

  // 규칙 2 없는 블럭 가능(str.length === 0) 
  (rule.includes(str) || str.length === 0) ? output.push('가능') : output.push('불가능')

}
console.log(output);

----------------------------------------------------------
/**
<코드 한계점>
1. str.length === 0 이것 말고는 제대로 작동 안한다.
  (전체적 수정 필요)
*/
----------------------------------------------------------

// 답안
function solution(전체블록, 규칙){
    let answer = [];
    for (let 부분블록 of 전체블록){
      answer.push(블록순서체크(부분블록, 규칙));
    }
    return answer;
  }
  
  function 블록순서체크(부분블록, 규칙){
    let 임시변수 = 규칙.indexOf(규칙[0]);
    for (let 문자 of 부분블록){
      if (규칙.includes(문자)){
        if (임시변수 > 규칙.indexOf(문자)){
          return '불가능';
        }
        임시변수 = 규칙.indexOf(문자);
      }
    }
    return '가능';
  }
  
  const 전체블록 = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'AEBFDGCH'];
  const 규칙 = 'ABCD';
  
  console.log(solution(전체블록, 규칙));
  //["가능", "불가능", "가능", "가능", "불가능"]