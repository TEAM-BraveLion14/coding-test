/**새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  
 그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.*/

const voteArr = prompt('공백을 기준으로 투표할 이름을 입력하세요.').split(' ');

const votingMap = new Map();

voteArr.forEach((e) => {
  if (!votingMap.has(e)) {
    votingMap.set(e, 1);
  } else {
    votingMap.set(e, votingMap.get(e) + 1);
  }
});

console.log(votingMap);
const votingArr = [...votingMap];
votingArr.sort((a, b) => b[1] - a[1]);

console.log(
  `${votingArr[0][0]}(이)가 총 ${votingArr[0][1]}표로 반장이 되었습니다.`
);
