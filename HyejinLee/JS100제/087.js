/*
# 문제87 : 천하제일 먹기 대회

천하제일 먹기 대회가 개최되었습니다.
이 대회는 정해진 시간이 끝난 후 음식을 먹은 그릇 개수를 파악한 후 각 선수들의 등수를 매깁니다. 

1. 같은 이름의 선수는 없습니다.
2. 접시의 수가 같은 경우는 없습니다.

입력 예1)
손오공 야모챠 메지터 비콜로
70 10 55 40

출력 예1)
{'손오공': 1, '메지터': 2, '비콜로': 3, '야모챠': 4}

입력 예2)
["홍길동","엄석대","연개소문","김첨지"]
[2, 1, 10, 0]

출력 예2)
{'연개소문': 1, '홍길동': 2, '엄석대': 3, '김첨지': 4}
*/

----------------------------------------------------------

// 내 코드
const participant = prompt('누가 참가하였습니까?').split(' ');
const plates = prompt('접시의 수를 입력해주세요.').split(' ').map(Number);

const arrMatch = participant.map((participant, index) => [participant, plates[index]])
// [['손오공', 70], ['야모챠', 10], ...['비콜로', 40]]

const sortMatch = arrMatch.sort((a, b) => b[1] - a[1]);
// [['손오공', 70], ['메지터', 55], ,...['야모챠', 10]]

// 인덱스 앞부터 1씩 증가 예정
let indexCnt = 0;



// // 각각 매치되는 키와 값 
// let obj = {};
// for(let i = 0; i < participant.length; i++){
//     obj[participant[i]] = plates[i];
// }
// // console.log(obj);   // {손오공: 70, 야모챠: 10, 메지터: 55, 비콜로: 40}


// // 접시 내림차순
// const sortPlates = plates.sort((a, b) => b[1] - a[1]);



// // 앞에서부터 숫자 1 증가

// // 

----------------------------------------------------------

// 답안
const name = "손오공 야모챠 메지터 비콜로".split(" ");
const point = "70 10 55 40".split(" ");
console.log(point);
const point_int = point.map(a => parseInt(a, 10));
console.log(point_int);

function sol(name, point) {
  let temp = [];
  for (let i of name){
    let obj = {};
    obj['name'] = i;
    obj['value'] = point[name.indexOf(i)];
    temp.push(obj);
  }
  // console.log(temp);

  temp.sort(function (a, b){
    return a.value < b.value ? 1: a.value > b.value ? -1: 0;
  })

  console.log(temp);

  let result = {};
  for (let i of temp){
    // console.log(i);
    result[i['name']] = temp.indexOf(i) + 1;
  };

  return result;
}

console.log(sol(name, point_int));