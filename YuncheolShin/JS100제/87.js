/**천하제일 먹기 대회가 개최되었습니다.
이 대회는 정해진 시간이 끝난 후 음식을 먹은 그릇 개수를 파악한 후 각 선수들의 등수를 매깁니다. 

1. 같은 이름의 선수는 없습니다.
2. 접시의 수가 같은 경우는 없습니다.*/

// const people = prompt('사람 이름 입력(공백 기준)').split(' ');
// const dishes = prompt('접시 수 입력(공백 기준)').split(' ');

const people = ['손오공', '야모챠', '메지터', '비콜로'];
const dishes = [70, 10, 55, 40];
const peopleArr = [];
const peopleMap = new Map();
const peopleObj = {};

people.forEach((e, idx) => peopleArr.push([e, dishes[idx]]));

peopleArr.sort((a, b) => b[1] - a[1]);
/**0
(2) ['손오공', 70]
(2) ['메지터', 55]
(2) ['비콜로', 40]
(2) ['야모챠', 10] */

// peopleArr.forEach((e, idx) => peopleMap.set(e[0], idx));
peopleArr.forEach((e, idx) => (peopleObj[e[0]] = idx + 1));
//{손오공: 1, 메지터: 2, 비콜로: 3, 야모챠: 4}
