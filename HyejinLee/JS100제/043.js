// 문제43 : 10진수를 2진수로

// 우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
// 이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

// **사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.**


// 내 코드
// 10진수 -> 2진수
// parseInt를 뺐을 때에는 console.log(change);를 해봤을 때 2진수로 변환이 안됐음 왜 그런거지 [❓❓❓]
// =>생각해보니까 당연함 prompt는 값 유형이 문자열임

const input = parseInt(prompt('숫자를 입력해주세요.'), 10); 
const change  = input.toString(2);

console.log(change);


// 답안
let a = prompt('10진수를 입력해주세요.')
let b = [];
let result = '';

while (a){
	b.push(a % 2);
	a = parseInt(a / 2, 10);
}
b.reverse();

b.forEach((n) => {
  result += n;
})

console.log(result);