// # 문제57 : 1의 개수

// **0부터 1000까지 1의 개수를 세는 프로그램**을 만들려고 합니다. 예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다. 11은 1이 2번 들어간 셈이죠.

// 그렇다면 0부터 1000까지의 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.


// 내 코드 1
let str = '';

for(let i = 1; i <= 1000; i++){
    str += i
}

const result = str.match(/1/g).length;

console.log(result); // 301


// 내 코드 2
let str = '';

for(let i = 1; i <= 1000; i++){
    str += i
}
// split으로 문자열이 됐으므로 문자열 리터럴 사용 ('1')
const result = str.split('').filter((x) => x === '1').length;

console.log(result); // 301



// 답안
//1번 답안 - 고전적인 방법
const obj = {};

for (let i = 0; i <= 1000; i++) {
    let tmp = i;
    while (tmp > 0) {
        let num = tmp % 10;
        if (obj[num]) {
            obj[num]++;
        } else {
            obj[num] = 1;
        }
        tmp = parseInt(tmp/10, 10);
    }
}

console.log(obj[1]);

//2번 답안 - 정규표현식 사용
let s = '';
for(let i = 0; i <= 1000; i++){
  s += i;
}
console.log(s);
console.log(s.match(/1/g).length);

//3번 답안 - for in 사용
let s = '';
for(let i = 0; i <= 1000; i++){
  s += i;
}
let count = 0;
for(let j in s){
  if(s[j] == 1){
    count++;
  }
}
console.log(count);

//4번답안 - for of 사용
let s = '';
for(let i = 0; i <= 1000; i++){
  s += i;
}
let count = 0;
for(let j of s){
  if (j == 1){
    count++;
  }
}
console.log(count);