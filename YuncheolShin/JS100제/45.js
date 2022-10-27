/**Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

이를 이용하여 현재 연도(2019)를 출력해보세요. */

const time = new Date();

// 1970 ~ 현재까지 (ms)
const ms = time.getTime();

// 1970 ~ 현재까지 (second)
const second = Math.floor(ms / 1000);

// 1970 ~ 현재까지 (minute)
const minute = Math.floor(second / 60);

// 1970 ~ 현재까지 (hour)
const hour = Math.floor(minute / 60);

// 1970 ~ 현재까지 (date)
const date = Math.floor(hour / 24);

// 1970 ~ 현재까지 (week)
const week = Math.floor(date / 7);

// 1970 ~ 현재까지 (year) (윤년 무시)
const year = Math.floor(date / 365);

console.log(1970 + year);

// 그냥 구하기
time.getFullYear();
