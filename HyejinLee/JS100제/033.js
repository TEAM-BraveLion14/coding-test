// 문제33 : 거꾸로 출력하기

// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

입출력

입력 : 1 2 3 4 5
출력 : 5 4 3 2 1

입력 : 2 4 6 7 8
출력 : 8 7 6 4 2


// 내 코드 1
const inputNum = prompt('여러 개의 숫자를 입력하세요.').split(' ').reverse().map(Number);

console.log(inputNum.join(' '));


// 내 코드 2
const inputNum = prompt('여러 개의 숫자를 입력하세요.').split(' ');
let outputNum = ''

// 뒤에서부터 거꾸로 출력
for(let i = inputNum.length -1; i >= 0; i--){
    outputNum += inputNum[i];
}

console.log(outputNum); // 여기서는 join(' ') 방법이 먹히지 않기 때문에 다른 방법 구해야 함 아래 써놓은 질문과 연관 [❓❓❓]


// 답안
const arr = prompt().split(' ').reverse();
let reverseVal = '';

for(let i = 0; i < arr.length; i++){
    reverseVal = reverseVal + (arr[i] + ' ');
}

console.log(reverseVal);

// 질문
강의 보면 arr[i] + ' ' 이런 식으로 뒷 부분 공백을 줬던데, 이 방법 말고 다른 방법은 없을지? 템플릿 리터럴도 생각은 해봤는데, 그대로여서 다른 방법을 찾아야 할듯 [❓❓❓]
=> 세민님 코드 참고하기