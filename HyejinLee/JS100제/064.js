/** 
# 문제64 : 이상한 엘레베이터

정량 N에 정확히 맞춰야만 움직이는 화물용 엘리베이터가 있습니다.
화물은 7kg, 3kg 두 가지이며 팔이 아픈 은후는 가장 적게 화물을 옮기고 싶습니다.

예를 들어 정량이 24kg이라면 3kg 8개를 옮기는 것보다는
7kg 3개, 3kg 1개 즉 4개로 더 적게 옮길 수 있습니다.

**입력**
정량 N이 입력됩니다.

**출력**
가장 적게 옮길 수 있는 횟수를 출력합니다.
만약 어떻게 해도 정량이 N이 되지 않는다면 -1을 출력합니다. 
*/

----------------------------------------------------------

// 내 코드
(function(){
    const input = parseInt(prompt('정량을 입력해주세요.'), 10);
    let count = 0;

    if(input % 7 === 0){
        count += (input / 7)
        console.log(Math.floor(count));
    }else if((input % 7 % 3) === 0){
        count += (input / 7) + (input % 7 / 3)
        // Math.floor를 사용한 이유: ex) 24입력 시 4.428571428571429가 나옴 [❓❓❓]
        console.log(Math.floor(count));             
    }else if(input % 7 !== 0 || input % 3 !== 0){
        return -1
    }
})()

----------------------------------------------------------

// 답안
let N = parseInt(prompt('정량을 입력하세요'), 10);
let result = 0;

while (true){
  if (N%7 === 0){
    result += parseInt(N/7, 10);
    console.log(result);
    break;
  }
  N -= 3;
  result += 1;
  if (N < 0){
    console.log(-1);
    break;
  }
}