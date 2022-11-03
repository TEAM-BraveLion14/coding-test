// # 문제61 : 문자열 압축하기

// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

입력
aaabbbbcdddd

출력
a3b4c1d4

----------------------------------------------------------

// <내 코드>
const input = prompt('문자를 입력하세요.').split('');

let str = '';
let count = 0;

for(let i = 0; i < input.length; i++){
    if(input[i] === input[i+1]){
        count ++;
    }else{
        // count+1 => if문에서 조건이 성립하는 경우뿐만 아니라 input[i] 자체의 개수도 포함
        str += input[i] + (count + 1);
    }
}

console.log(str);   // [❓❓❓] 답이 이상함

----------------------------------------------------------
/**     
<추가적으로 생각해본 방식 1> [❓❓❓]
String.match(/~~~/) 사용하여 일치하는 것을 찾을 수 있지 않을까 싶었지만 
/~~~/ 이 부분에 특정 개체를 넣어야 하는데, 이게 가능한가?

ex) const result = input.match(/setArr[i]/g)


<추가적으로 생각해본 방식 2>
중복 제거 => 어떤 문자열이 나왔는지 배열 형태로 추출
const set = new Set(input);
const setArr = Array.from(set)
이후 setArr와 같은 것들의 각각의 개수 구하기
*/
----------------------------------------------------------

// 답안
const user_s = new String(prompt('문자열을 입력하세요'));
let result_s = '';
let store_s = user_s[0];
let count = 0;

for (let i of user_s){
  if (i === store_s){
    count += 1;
  } else{
    result_s += store_s + String(count);
    store_s = i;
    count = 1;
  }
}

result_s += store_s + String(count);
console.log(result_s);