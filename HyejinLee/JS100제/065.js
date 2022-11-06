/*
# 문제65 : 변형된 리스트
a = [1, 2, 3, 4]
b = [a, b, c, d]
이런 리스트가 있을 때 **[[1, a], [b, 2], [3, c], [d, 4]]** 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
*/

----------------------------------------------------------

// 내 코드
const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];

(function(){
    let arr = [];
    
    for(let i = 0; i < a.length; i++){
        if(i % 2 === 0){
            const arrEven = [a[i], b[i]]
            arr.push(arrEven)
        }else{
            const arrOdd = [b[i], a[i]]
            arr.push(arrOdd)
        }
    }
    console.log(arr);
})()

----------------------------------------------------------

/**
<나의 실수>   [❓❓❓]
const arrEven = [a[i], b[i]] 부분을
const arrEven = [`${a[i]}, ${b[i]}`]; 코드로
백틱을 사용하여 출력했더니 [1, 'a']형태가 아닌 ['1, a'] 형태로 나왔다.
아마 `` 안에 있는 것을 하나의 문자열로 인식해버린듯 하다.
*/

----------------------------------------------------------

// 답안
// 방법 1 - forEach 사용
const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];
let c = [];

a.forEach(function(e, i){
  if (i%2 === 0){
    c.push([e, b[i]]);
  } else {
    c.push([b[i], e]);
  }
});

console.log(c);

// 방법 2 - map 사용
const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];

let c = a.map(function(e, i){
    if(i%2 === 0){
        return [e, b[i]];
    } else{
        return [b[i], e];
    }
});

console.log(c);