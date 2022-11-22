/**
# 문제77 : 가장 긴 공통 부분 문자열

**가장 긴 공통 부분 문자열(Longest Common Subsequence)**이란 A, B 두 문자열이 주어졌을 때 두 열에 공통으로 들어 있는 요소로 만들 수 있는 가장 긴 부분열을 말합니다. 여기서 부분열이란 다른 문자열에서 몇몇의 문자가 빠져 있어도 순서가 바뀌지 않은 열을 말합니다.

예를 들어 S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']  S2 = ['T', 'H', 'I', 'S', 'I', 'S']라는 두 문자열이 있을 때 둘 사이의 부분 공통 문자열의 길이는 ['T', 'H', 'I', 'S', 'I', 'S']의 6개가 됩니다.

이처럼 **두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 프로그램**을 만들어 주세요.

두 개의 문자열이 한 줄에 하나씩 주어집니다. 문자열은 알파벳 대문자로만 구성되며 그 길이는 100글자가 넘어가지 않습니다.

출력은 이 두 문자열의 가장 긴 부분 공통 문자열의 길이를 반환하면 됩니다.
*/

// S1을 처음부터 S2와 비교

// S1와 S2 join THISISSTARINGS THISIS
// T, TH, THI, THIS, THISI, THISIS, H, HI, HIS, HISI, HISIS, I, IS... => 이중 for문
// => includes

// S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']
// S2 = ['T', 'H', 'I', 'S', 'I', 'S']
// const strS1 = S1.join("");
// const strS2 = S2.join("");

// // 길이 max를 업데이트 하는 방법

// // arr에 넣을때 strS2.slice(i, j).length
// // 조건맞는 strS2.slice(i, j)를 추가해서 그 중 가장 길이가 긴 값 구하기

// // let arr = []
// let max = 0;
// for (let i = 0; i < strS2.length; i++){
//     for (let j = i + 1; j <= strS2.length; j++){
//       const slicedStr = strS2.slice(i, j);
//       if(strS1.includes(slicedStr)){
//         // arr.push(strS2.slice(i, j).length);
//         if(slicedStr.length > max){
//           max = slicedStr.length;
//         }
//       }
//     }
// }
// // Math.max(...arr);
// console.log(max)

// ----------------------------------------------------------

S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S'];
S2 = ['T', 'H', 'I', 'S', 'I', 'S'];

const strS1 = S1.join('');
const strS2 = S2.join('');

let max = 0;

// 이전에 틀린 부분 => 66번 라인 max = s2Index로 업데이트 하는 부분
for (let i = 0; i < strS2.length; i++) {
  for (let j = 0; j < strS1.length; j++) {
    let s2Index = i;
    let s1Index = j;
    let tmp = 0;
    while (strS2[s2Index] === strS1[s1Index] && strS2[s2Index] !== undefined) {
      tmp++;
      if (tmp > max) {
        max = tmp;
      }
      s2Index++;
      s1Index++;
    }
  }
}

console.log(max);
