// # 문제53 : 괄호 문자열

// 괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 그중 괄호의 모양이 바르게 구성된 문자열을 **바른 문자열**, 그렇지 않은 문자열을 **바르지 않은 문자열**이라 부르도록 하자. 

// (())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
// (해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

// **입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.**


[다시 풀어보기📛📛📛]


// 내 코드
function check(input){
    const input = prompt('괄호를 입력하세요.').split('');
    let arr = [];

    for(let i = 0; i < input.length; i++){
        if(input === '['){
            arr.push(']')
        }else if(input === '{'){
            arr.push('}')
        }else if(input === )
    }

// 빈 문자열일 때 'NO' 반환
    if(input === ''){
        return 'NO';
    }
}




// switch문 사용?



// <폐기된 코드 ㅠㅠ..>
// const input = prompt('괄호를 입력하세요.').split('');
// // bracketArr[0][1] 이런 식으로 활용하기 위해 따옴표 두 가지 다 사용해서 세분화 했음
// const bracketArr = ["'[', ']'", "'{', '}'", "'(', ')'"];

// let arr = [];


// for(let i = 0; i < input.length; i++){
//     if(input[0] === bracketArr[0][0]){
//         arr += bracketArr[0]

//     }
// }


// 답안
function mathBrackets(e){
    let count = 0;
    
    //괄호 개수가 같지 않으면 false
    for (let i=0; i<e.length; i++){
        if (e[i] === '('){
            count++;
        }
        if (e[i] === ')'){
            count--;
        }
    }
    if (count !== 0){
        return false;
    }
    
    let 괄호 = [];
    for (let i in e){
        if (e[i] === '(') {
            괄호.push('(');
        }
            
        if (e[i] === ')') {
            if (괄호.length === 0) {
                return false;
            }
            괄호.pop();
        }   
    }
    return true;
}
    

const n = prompt('입력해주세요.').split('');

if (mathBrackets(n) === true) {
    console.log('YES');
} else {
    console.log('NO');
}