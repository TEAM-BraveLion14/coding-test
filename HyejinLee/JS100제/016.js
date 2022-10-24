// 문제16 : 로꾸거
// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

입출력

입력 : 거꾸로
출력 : 로꾸거

// 내 코드
function reverse(sentence){
    // 빈 문자열
    let reverseSentence = '';
    // 뒤에서부터 하나씩 빼오기
    for(let i = sentence.length - 1; i >= 0; i--){
        // 빈 문자열에 새롭게 넣은 sentence의 i번째에 해당하는 것을 집어넣음
        reverseSentence += sentence[i]
    }
    return reverseSentence;
}

console.log(reverse('행복한 하루'));


// 답안
const n = prompt('입력하세요.');

const reverseString = n.split('').reverse().join('');
/*
* split() 메서드는 문자열을 배열로 만들어 반환하고,
* reverse() 메서드는 배열의 순서를 반전하며,
* join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.
*/
console.log(reverseString);