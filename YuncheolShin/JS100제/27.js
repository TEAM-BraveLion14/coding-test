/**첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고, 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.

두 개를 합쳐 학생의 이름이 key이고 value가 수학 점수인 객체를 출력해주세요. */

const students = prompt('학생 이름을 공백을 기준으로 입력하세요.').split(' ');
const scores = prompt('학생 성적을 공백을 기준으로 입력하세요.').split(' ');

const studentObj = {};
students.map((student, index) => {
  studentObj[student] = scores[index];
});

console.log(studentObj);
