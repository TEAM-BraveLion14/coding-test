/**
# 문제82 : 수학 괄호 파싱

수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다. 괄호는 소괄호밖에 없습니다.

입출력 예시
데이터 입력(1), 프로그램 종료(2) : 1
데이터를 입력하세요: 3 + 5
True


데이터 입력(1), 프로그램 종료(2) : 1
데이터를 입력하세요: 5 + 7) * (3 * 5)
False

function math(e){

    //코드를 작성해주세요

}
    
while (1){
    let order = prompt('데이터 입력(1), 프로그램 종료(2)');
    if (order === 1){
        const ex = prompt('데이터를 입력하세요');
        console.log(math(ex));
    } else {
        break;
    }
}
*/

----------------------------------------------------------

// 내 코드
const input = prompt('데이터를 입력하세요.').split('').filter(v => v !== ' ')
// console.log(input);  // ['5', '+', '7', ')', '*', '(', '3', '*', '5', ')']

let checkLeft = [];
let checkRight = [];
for(let i of input){
    if(i === '('){
        checkLeft.push(i)
    }else if(i === ')'){
        checkRight.push(i)
    }
}
// console.log(checkLeft);     // ['(']
// console.log(checkRight);    // [')', ')']
checkLeft.length !== checkRight.length ? false : true

// 근데 지금 이건 5 ( + 7) * (3 * 5) 이런 경우는 생각 못한 거 아닌가 [❓❓❓]

----------------------------------------------------------

// 답안
function sol(d){
    let step = 0;
    for (let i in d){
        if (d[i] ==="("){
            step += 1;
        } else if (d[i] === ")"){
            step -=1;
        }
    }
    if (step !== 0){
        return false;
    }
    if (step === 0){
        return true;
    } 
}

while (1){
    const n = prompt('데이터 입력(1), 프로그램 종료(2)');
    if (n === '1'){
        const str = prompt('데이터를 입력하세요').split('');
        console.log(sol(str));
    } else{
        break;
    }
}