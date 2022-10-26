// 문제21 : set은 어떻게 만드나요?
// 다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

1)  var x = {1, 2, 3, 5, 6, 7};
2)  var x = {};
3)  var x = new Set('javascript'); ✔
4)  var x = new Set(range(5));
5)  var x = new Set(); ✔


// 답안
3번, 5번

set 객체는 set 생성자 함수로 생성됨 따라서 new가 존재해야 함

4번 같은 메서드는 자바스크립트에 존재하지 않음