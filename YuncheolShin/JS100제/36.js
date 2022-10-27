/**1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요. */

const num = prompt('1~9 중 하나의 정수를 입력하세요.');
const MAX_GUGUDAN = 9;

for (let i = 1; i <= MAX_GUGUDAN; i++) {
  console.log(num * i);
}
