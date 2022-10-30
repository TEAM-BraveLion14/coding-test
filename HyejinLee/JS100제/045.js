// 문제45 : getTime()함수 사용하기

// Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

// 이를 이용하여 **현재 연도(2022)를 출력해보세요.**


// 내 코드
const date = new Date();
const now = Math.floor(date.getTime() / 60 / 60 / 24 / 365 / 1000) + 1970;
console.log(now);


// 참고: http://www.tcpschool.com/javascript/js_standard_dateMethod


// 답안
const d = new Date();

let year = d.getTime();
year = Math.floor(year/(3600*24*365*1000))+1970

console.log(year);