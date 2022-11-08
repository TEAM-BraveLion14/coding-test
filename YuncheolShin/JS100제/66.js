/**탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
순서에 맞게 쌓지 않으면 무너질 수 있습니다.

예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

- B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
- B 다음 블럭이 C가 될 수 있습니다.

쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

1. 블럭은 알파벳 대문자로 표기합니다.
2. 규칙에 없는 블럭이 사용될 수 있습니다.
3. 중복된 블럭은 존재하지 않습니다.*/

const tower = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'EFGHZ'];
const rule = 'ABD';

const regRule = rule.split('').join('|');
const regExp = new RegExp(regRule, 'g');

tower
  .map((e) => e.match(regExp))
  .map((e) => e !== null && e.join(''))
  .map((e) => {
    if (e === false) return '불가능';

    for (let i = 0; i < e.length - 1; i++) {
      const temp = rule.indexOf(e[i]);
      const temp2 = rule.indexOf(e[i + 1]);

      if (temp < temp2) {
        continue;
      } else {
        return '불가능';
      }
    }

    return '가능';
  });
