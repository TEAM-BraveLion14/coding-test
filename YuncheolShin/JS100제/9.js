// 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

//answer
const answer1 = year.concat(
  '/',
  month,
  '/',
  day,
  ' ',
  hour,
  ':',
  minute,
  ':',
  second
);
const answer2 = year.concat('/').concat(month).concat('/').concat(day);

const answer3 = year.concat(`/${month}/${day} ${hour}:${minute}:${second}`);
