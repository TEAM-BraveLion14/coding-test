// 문제36 : 구구단 출력하기

// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

입출력

입력 : 2
출력 : 2 4 6 8 10 12 14 16 18


// 내 코드
const inputNum = prompt('숫자 하나를 입력하세요.');

if(inputNum.length > 0 && inputNum.length <= 1){ // 이렇게 하지 말고 그냥 inputNum.length === 1 로 하면 더 간단함 [❓❓❓]
    for(let i = 1; i <= 9; i++){
        let gugudan = inputNum * i
        console.log(gugudan);
    }
}else if(inputNum.length > 1){
    console.log('숫자 하나만 입력하세요.');
}else if(inputNum === /[^1-9]/){
    console.log('숫자를 입력하세요.');
}

// 피드백 (세민님 의견)
// 코드를 아래와 같이 수정하면 더 좋을 것 같음 
const inputNum = prompt('숫자 하나를 입력하세요.');

if(inputNum.length === 1 && /[1-9]/.test(inputNum)){
    for(let i = 1; i <= 9; i++){
        let gugudan = inputNum * i
        console.log(gugudan);
    }
}else {
    console.log('숫자 하나를 제대로 입력하세요.');
}

문자열이랑 정규 표현식이랑 같은지 비교할 때 === 말고 test 써야하는거 같아요! 그리고 14번째 라인에(if(inputNum.length > 0 && inputNum.length <= 1){}) → 이 조건식이 뭔가 구구단 코드의 전체를 지배하는 조건식인거 같은 느낌이 들었습니다! 
예를 들어

const inputNum = prompt('숫자 하나를 입력하세요.');

if(inputNum.length === 1){
    for(let i = 1; i <= 9; i++){
        let gugudan = inputNum * i
        console.log(gugudan);
    }
}else if(inputNum === /[^1-9]/){
    console.log('숫자 하나를 제대로 입력하세요.');
}

이렇게 한다고 하더라도 첫 번째 조건식의 중괄호 때문에, 입력창에 'ㅇ' 한글 한 글자만 입력해도 NaN이 나오더라구요! 그래서 조건을 처음에 좀 더 구체적으로 거는게 더 좋아보여요!


// 질문
else if(inputNum === /[^1-9]/){
    console.log('숫자를 입력하세요.');
}
정규표현식으로 1에서 9까지의 숫자를 입력한 것이 아니면 '숫자를 입력하세요.' 이 멘트가 나오도록 설정하고 싶었지만 숫자가 아닌 것을 입력해도 반응이 없다. 정규표현식을 잘못 사용한 걸까? [❓❓❓]
=> 위에 설명 적어놓음


// 답안
const num = prompt('1 ~ 9까지의 숫자 중 하나를 입력하세요.')
let result = '';

for (let i=1; i<=9; i++){
  result += i*num + ' ';
}

console.log(result);