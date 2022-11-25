/**일정한 규칙을 가지고 있는 숫자를 나열하는 놀이를 하는 중입니다.
이전 숫자에서 각 숫자의 개수를 나타내어 숫자로 만들고 다시 그 숫자를 같은 규칙으로 만들며 나열합니다.
이 놀이는 1부터 시작합니다.
다음 수는 1이 1개이기 때문에 '11'이 되고,
 '11'에서 1이 2개이기 때문에 그다음은 '12'가 됩니다.

즉,
1. 1  → (1) 
2. 11 → (1이 1개)

3. 12 → (1이 2개)
4. 1121 → (1이 1개 2가 1개)

5. 1321 → (1이 3개 2가 1개)
6. 122131 → (1이 2개 2가 1개 3이 1개)

7. 132231 → (1이 3개 2가 2개 3이 1개)
8. 122232 -> 
\
위와 같이 진행되는 규칙을 통해 진행 횟수 N을 입력받으면 해당되는 수를 출력하세요.*/

// https://www.notion.so/85-9c20bb185f75419f9b8181615b1e157c

// set 으로 숫자의 종류를 뽑아내고
// 숫자의 종류를 뽑아내서 키를 돌면서 1121 -> 1 2
// 1 -> "1121".match(/1/g).length
// key값 + "1121".match(/1/g).length

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
const N = 8;
let str = "1";

// 인덱스 1부터 시작 고려
for (let i = 0; i < N - 1; i++) {
  const uniqueNums = [...new Set(str)].sort((a, b) => a - b);
  const tmpArr = [];

  uniqueNums.forEach((e) => {
    const reg = new RegExp(e, "g");
    const matched = str.match(reg);
    tmpArr.push(e + matched.length);
  });

  str = tmpArr.join("");
}

console.log(str);
