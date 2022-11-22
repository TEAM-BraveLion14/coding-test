/**
# 문제77 : 가장 긴 공통 부분 문자열

**가장 긴 공통 부분 문자열(Longest Common Subsequence)**이란 A, B 두 문자열이 주어졌을 때 두 열에 공통으로 들어 있는 요소로 만들 수 있는 가장 긴 부분열을 말합니다. 여기서 부분열이란 다른 문자열에서 몇몇의 문자가 빠져 있어도 순서가 바뀌지 않은 열을 말합니다.

예를 들어 S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']  S2 = ['T', 'H', 'I', 'S', 'I', 'S']라는 두 문자열이 있을 때 둘 사이의 부분 공통 문자열의 길이는 ['T', 'H', 'I', 'S', 'I', 'S']의 6개가 됩니다.

이처럼 **두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 프로그램**을 만들어 주세요.

두 개의 문자열이 한 줄에 하나씩 주어집니다. 문자열은 알파벳 대문자로만 구성되며 그 길이는 100글자가 넘어가지 않습니다.

출력은 이 두 문자열의 가장 긴 부분 공통 문자열의 길이를 반환하면 됩니다.
*/

- Test Case -

입력
THISISSTRINGS
THISIS

출력
6

-

입력
THISISSTRINGS
TATHISISKKQQAEW

출력
6

-

입력
THISISSTRINGS
KIOTHIKESSISKKQQAEW

출력
3

-

입력
THISISSTRINGS
TKHKIKSIS

출력
3

----------------------------------------------------------
/** 
[🎈같이 푼 문제🎈]

S1을 처음부터 S2와 비교

S1와 S2 join THISISSTARINGS THISIS
T, TH, THI, THIS, THISI, THISIS, H, HI, HIS, HISI, HISIS, I, IS... => 이중 for문
=> includes
*/

S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']
S2 = ['T', 'H', 'I', 'S', 'I', 'S']
const strS1 = S1.join("");
const strS2 = S2.join("");

// 길이 max를 업데이트 하는 방법

// arr에 넣을때 strS2.slice(i, j).length 
// 조건맞는 strS2.slice(i, j)를 추가해서 그 중 가장 길이가 긴 값 구하기

// let arr = []
let max = 0;
for (let i = 0; i < strS2.length; i++){
    for (let j = i + 1; j <= strS2.length; j++){
      const slicedStr = strS2.slice(i, j);
      if(strS1.includes(slicedStr)){
        // arr.push(strS2.slice(i, j).length);
        if(slicedStr.length > max){
          max = slicedStr.length;
        }
      }
    }
}
// Math.max(...arr);
console.log(max)

----------------------------------------------------------

{/* <윤철님이 말해주신 투포인터> */}

S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']
S2 = ['T', 'H', 'I', 'S', 'I', 'S']

const strS1 = S1.join("");
const strS2 = S2.join("");

let max = 0;

for(let i = 0; i < strS2.length; i++){
  for(let j = 0; j < strS1.length; j++){
    s2Index = i;
    s1Index = j;
    while(strS2[s2Index] === strS1[s1Index] && strS2[s2Index] !== undefined){
      if(s2Index > max){
        max = s2Index + 1;  
      }
      s2Index++;
      s1Index++;
    }
  }
}

/**
twoPointer => pointer를 두개 잡는 것
두 배열보다 한 배열에서 검색하는게 더 좋은 알고리즘!
위의 풀이는 처음부터 끝까지 다 도는데 이 알고리즘은 조건이 맞을 때 돌아가서 더 효율저!

THISISSTRINGS => 두번째
0      7
j = T
THISIS => 첫번째
i = T

THISIS의 T를 기준으로 THISISSTRINGS를 검색
*/

----------------------------------------------------------

// 답안
function sol(string){
    let result = [];
    for (let i=1; i<string.length+1; i++){
        for (let j=0; j<i; j++){
            result.push(string.slice(j, j+string.length-i+1));
        }  
    }
    return result;
}
    
const inputOne = prompt('첫번째 문자열을 입력해주세요.');
const inputTwo = prompt('두번째 문자열을 입력해주세요.');
const arrayOne = sol(inputOne);
const arrayTwo = sol(inputTwo);

//공통 부분 문자열 찾기- 교집합
let intersection = arrayOne.filter(x => arrayTwo.includes(x));

//문자열 길이로 내림차순 정렬
intersection.sort((a,b)=>{
    return b.length-a.length;
});

console.log(intersection[0].length);
