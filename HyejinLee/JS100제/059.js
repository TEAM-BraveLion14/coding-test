// # 문제59 : 빈칸채우기

// 총 문자열의 길이는 50으로 제한하고 사용자가 문자열을 입력하면 그 문자열을 가운데 정렬을 해주고, 나머지 빈 부분에는 '='을 채워 넣어주세요.

입력
hi

출력
========================hi========================

----------------------------------------------------------

// 내 코드 1
const input = prompt('문자를 입력해주세요.');
let str = '';
/*
-> input 문자열의 절반 개수는 공간을 차지(좌우 균형을 위해)해야 하므로 50의 반절인 25에서 그 개수를 제외
-> addStrCount의 ~~는 input 길이 홀수 고려(소수점 제외)
*/
const inputHalfCount = input.length / 2;
const addStrCount = 25 - ~~inputHalfCount;

if(input.length % 2 === 0 && input.length !== 0 || input.length % 2 !== 0){     // input.length !== 0 이것만 남겨놔도 제대로 동작함 [❓❓❓]
    str += '='.repeat(addStrCount) + input + '='.repeat(50 - addStrCount - input.length)
}else if(input.length === 0){
    alert('error: 문자를 입력하셔야 합니다.');
}

console.log(str);

----------------------------------------------------------

// 내 코드 2
// 답안 보고 padStart, padEnd 사용해 봄
const input = prompt('문자를 입력해주세요.');
const left = input.padStart(25 + ~~(input.length / 2), '=')
const right = left.padEnd(50, '=');
console.log(right);

----------------------------------------------------------

// 답안
const str = prompt('문자열을 입력해주세요.');

const n = 25 + parseInt((str.length/2), 10);

//왼쪽부터 채우기
const a = str.padStart(n, '='); 

//오른쪽까지 채워서 출력
console.log(a.padEnd(50, '='));
/*
padStart(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 왼쪽부터 주어진 문자열로 채움
padEnd(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 오른쪽부터 주어진 문자열로 채움
*/