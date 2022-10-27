// 다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
var nums = [100, 200, 300, 400, 500];

// answer1
nums.pop();
nums.pop();

//answer 2
nums.splice(0, 3);

// answer 3
var result = nums.slice(0, 3);
