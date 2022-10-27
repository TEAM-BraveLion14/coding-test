// 문제34 : sort 구현하기

// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

// 민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

입출력

입력 : 176 156 155 165 166 169
출력 : NO

입력 : 155 156 165 166 169 176
출력 : YES


// 내 코드
const inputHeight = prompt('키를 입력해주세요.').split(' ').map(Number); // map(Number)를 통해 숫자로 바꿔놓기

function fromShortToTall(){
    for(let i = 0; i < inputHeight.length; i++){
        if(inputHeight[i + 1] > inputHeight[i]){ // 예를 들어 숫자가 155 155 156 165 166 169 176로 되어 있을 때 NO가 나와버림 따라서 > 가 아니라 >= 로 범위를 잡아서 해당 예시같은 경우 YES가 나올 수 있도록 하자[❓❓❓]
            return 'YES'
        }else{
            return 'NO'
        }
    }
}

fromShortToTall(inputHeight)




// 답안
const unsorted = prompt('키를 입력하세요');
let sorted = "";

sorted = unsorted
  .split(" ")
  .sort(function(a, b) {
    return a - b;
  })
  .join(" ");

if (unsorted === sorted) {
  console.log("Yes");
} else {
  console.log("No");
}