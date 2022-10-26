// 문제29 : 대문자만 지나가세요
// 진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.

// 알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램을 만들어 주세요.


// 내 코드
const alphabet = prompt('알파벳 대문자를 입력하세요.');
// 알파벳 하나만 입력하라고 했으니까 글자 수 제한 걸어놓음
if(alphabet === alphabet.toUpperCase() && alphabet.length <= 1){ // => 하나도 안썼을 때도 고려해야 할듯 / 한글 썼을 때에도 YES 나오니까 이런 상황을 방지하기 위해선 정규표현식 사용하자
    console.log('YES');
}else if(alphabet.length > 1){
    console.log('한 글자만 입력해주세요.');
}
else{
    console.log('NO');
}


// 답안
const data = prompt('알파벳을 입력하세요.');

if (data === data.toUpperCase()){
  console.log('YES');
} else {
  console.log('NO');
}