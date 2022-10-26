// 문제28 : 2-gram
// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 

// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

입력
Javascript

출력
J a
a v
v a
a s
s c
c r
r i
i p
p t

// 입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해 주세요.

Jaavvaassccrriippt


// 내 코드
const str = prompt('입력하세요.').split('');

for(let i = 0; i < str.length; i++){
    console.log(str[i], str[i+1]);
}

// 질문
내 코드에서는 i의 범위를 잡을 때 i < str.length 이렇게 잡았는데, 답안을 보면 -1까지 되어 있다. -1을 한 이유는 제일 마지막 글자는 한 번만 출력되도록 하기 위해서인가? [❓❓❓]
=>Yes

// 답안
const data = prompt('문자를 입력하세요.');

for (let i=0; i<data.length-1; i++){
  console.log(data[i], data[i+1]);
}