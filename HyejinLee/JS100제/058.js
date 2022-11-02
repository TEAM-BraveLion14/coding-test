// # 문제58 : 콤마 찍기

// 원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
// 정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

// **숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.**

// 예를 들어, **123456789**를 입력받았으면 **123,456,789**를 출력해야 합니다.

----------------------------------------------------------

// 내 코드
// 천 단위 콤마 정규표현식 필요할 때 활용하기 [❓❓❓]
const input = prompt('숫자를 입력하세요.');
const result = input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); 
console.log(result);

----------------------------------------------------------

/*
아예 콤마를 만들어 주는 내장 함수가 있다고 한다! 정확히는 사용하는 용도에 맞게 변환 시켜줌 [❓❓❓]
const input = parseInt(prompt('숫자를 입력하세요.'), 10);
console.log(input.toLocaleString());

참고: https://lily-im.tistory.com/64

*/

----------------------------------------------------------

// 답안
// 내장함수 사용
const n = prompt('숫자를 입력해주세요.');
parseInt(n, 10);

console.log(n.toLocaleString());

// 재귀함수 사용
function comma(s) {
  if (s.length <= 3) {
    return s;
  } else {
    return comma(s.slice(0, s.length - 3)) + ',' + s.slice(s.length - 3);
  }
}

const n = prompt('숫자를 입력해주세요.');
console.log(comma(n));