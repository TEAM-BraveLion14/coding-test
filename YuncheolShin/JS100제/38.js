/**호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.

1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.*/

const scoreArr = prompt('공백을 기준으로 학생들의 점수를 입력하세요.').split(
  ' '
);

const scoreMap = new Map();

scoreArr.forEach((score) => {
  if (!scoreMap.has(score)) {
    scoreMap.set(score, 1);
  } else {
    scoreMap.set(score, scoreMap.get(score) + 1);
  }
});

const sortedScoreArr = [...scoreMap].sort((a, b) => b[0] - a[0]);

let result = 0;

if (sortedScoreArr.length > 2) {
  for (let i = 0; i < 3; i++) {
    result += parseInt(sortedScoreArr[i][1], 10);
  }
} else {
  for (let i = 0; i < sortedScoreArr.length; i++) {
    result += parseInt(sortedScoreArr[i][1], 10);
  }
}

console.log(result);
