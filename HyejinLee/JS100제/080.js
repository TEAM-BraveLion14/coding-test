/** 
# 문제80 : 순열과 조합

**조합**이란 원소들을 조합하여 만들 수 있는 경우의 수이며 원소의 순서는 신경 쓰지 않습니다.
**순열**이란 원소의 값이 같더라도 순서가 다르면 서로 다른 원소로 취급하는 선택법입니다.

한글의 자모 24자 중 자음은 총 14개입니다.
이 중 입력받은 자음을 n 개를 선택하여 나올 수 있는 모든 조합과, 조합의 수를 출력하고 싶습니다.

‘한글 맞춤법’의 제2장 제4항에서는 한글의 기본 자모 24자 “ㄱ(기역), ㄴ(니은), ㄷ(디귿), ㄹ(리을), ㅁ(미음), ㅂ(비읍), ㅅ(시옷), ㅇ(이응), ㅈ(지읒), ㅊ(치읓), ㅋ(키읔), ㅌ(티읕), ㅍ(피읖), ㅎ(히읗), ㅏ(아), ㅑ(야), ㅓ(어), ㅕ(여), ㅗ(오), ㅛ(요), ㅜ(우), ㅠ(유), ㅡ(으), ㅣ(이)”를 제시

나올 수 있는 모든 조합을 아래와 같이 출력해 주세요.

**<--요구 조건-->**
1. 첫 번째 입력으로 선택할 한글 자음이 주어집니다.
2. 두 번째 입력으로 조합의 수가 주어집니다.
3. 주어진 조합의 수에 따라 조합과 조합의 수를 출력해 주세요.
*/

입력
ㄱ,ㄴ,ㄷ,ㄹ
3

출력
['ㄱㄴㄷ', 'ㄱㄴㄹ', 'ㄱㄷㄹ', 'ㄴㄷㄹ']
4

----------------------------------------------------------

// 내 코드(는 아니고)
// 조합 구할때 이런 코드 많이 쓴다고 함
// (재귀)
const hangeul = prompt('한글 자음을 입력해주세요.').split(',');
const num = parseInt(prompt('조합의 수를 입력해주세요.'), 10) 

const combination = (hangeul, num) => {
    let output = [];
    if(num === 1){
        return hangeul.map((v) => [v]);
    }
    // forEach로 배열 모든 원소 전부 한 번씩 고정되도록 의도
    hangeul.forEach((el, index, arr) => {
        // +1을 해야 현재 인덱스의 뒤부터 끝까지 잘려나감
        const rest = arr.slice(index + 1)
        // 고정 값 제외(따라서 num의 개수 -1) 나머지 배열에 관한 조합
        const restCombination = combination(rest, num-1);
        const attached = restCombination.map((v) => [el, ...v]);
        output.push(...attached)    
    });
    return output;
}

combination(hangeul, num)

/** 
++ 백트래킹(DFS 기반)
=>해당 경우의 수로 탐색하며 내려가다가 해당 노드가 조건에 맞지 않는다고 생각되면 그 경우를 잘라내고 다시 상위 노드로 돌아가 다른 하위 노드로 내려가는 과정 반복
*/

----------------------------------------------------------

// 답안
function combination(chars) {
    let combi = [];

    const f = (prefix, chars) => {
      for (let i=0; i<chars.length; i++) {
        combi.push(prefix + chars[i]);

        f(prefix + chars[i], chars.slice(i + 1));
      }
    }

    f('', chars);

    //조합의 수에 맞는 것만 추출!
    const result = combi.filter(x => x.length === n);
    console.log(result);

    return result.length;
}

const arr = prompt('입력해주세요').split(',');
const n = parseInt(prompt('조합의 수를 입력해주세요'), 10);

console.log(combination(arr));