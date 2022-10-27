// 문제36 : 구구단 출력하기

// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

입출력

입력 : 2
출력 : 2 4 6 8 10 12 14 16 18


// 내 코드
const inputNum = prompt('숫자 하나를 입력하세요.');

if(inputNum.length > 0 && inputNum.length <= 1){
    for(let i = 1; i <= 9; i++){
        let gugudan = inputNum * i
        console.log(gugudan);
    }
}else if(inputNum.length > 1){
    console.log('숫자 하나만 입력하세요.');
}else if(inputNum === /[^1-9]/){
    console.log('숫자를 입력하세요.');
}

// 질문
else if(inputNum === /[^1-9]/){
    console.log('숫자를 입력하세요.');
}
정규표현식으로 1에서 9까지의 숫자를 입력한 것이 아니면 '숫자를 입력하세요.' 이 멘트가 나오도록 설정하고 싶었지만 숫자가 아닌 것을 입력해도 반응이 없다. 정규표현식을 잘못 사용한 걸까? [❓❓❓]


// 답안
const num = prompt('1 ~ 9까지의 숫자 중 하나를 입력하세요.')
let result = '';

for (let i=1; i<=9; i++){
  result += i*num + ' ';
}

console.log(result);