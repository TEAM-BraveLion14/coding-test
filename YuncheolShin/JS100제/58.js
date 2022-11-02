/**원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다. */

const inputNum = prompt('숫자를 입력하세요.');

const reversedArr = inputNum.split('').reverse();

// 0 1 2 , 4 5 6 , 8 9 10 , 12 13 14 ,=> 3, 7, 11, 15... 에 ,
for (let i = 0; i < reversedArr.length; i++) {
  if (i % 4 === 3) {
    reversedArr.splice(i, 0, ',');
  }
}

const result = reversedArr.reverse().join('');
console.log(result);
