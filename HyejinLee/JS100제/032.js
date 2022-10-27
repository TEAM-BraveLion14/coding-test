// 문제32 : 문자열 만들기
// 취업 준비생인 혜림이는 자기소개서를 쓰고 있습니다. 열심히 자기소개서를 작성하던 도중 혜림이는 자기가 지금까지 단어를 얼마나 적었는지 궁금하게 됩니다. 

// 혜림이를 위해 문자열을 입력받으면 단어의 갯수를 출력하는 프로그램을 작성해 주세요.


// 내 코드
const selfIntroduction = prompt('자기소개서를 작성하세요.').split(' ');

console.log(selfIntroduction.length);

// 질문
만약 '저는 미래에 용이 되고 싶습니다. ' 이런 식으로  다.  뒤에 공백이 생기면 6으로 출력됨
실수로 공백을 더 주게 될 경우를 고려해서 코드를 짤 수 있는 방법은 없을까? [❓❓❓]
=> 질문있어요 스레드에 올라온 filter 방법을 사용하면 좋을 것 같다. 내 코드를 수정해보면

const selfIntroduction = prompt('자기소개서를 작성하세요.').split(' ').filter(x => x !== '');

console.log(selfIntroduction.length);

이런 식으로 수정할 수 있다.

// 질문
또 다른 방법으로 나왔던 set 사용하는 것도 좋을 것 같긴 하지만 만약 문장 안에 동일한 단어가 2개 이상이 들어갈 경우 몇개의 단어를 사용했는지 세는 것이 정확하지 않을 것 같다는 생각을 했다. 예를 들어, '안녕하세요. 저는 누구입니다. 저는 어떠한 일을 했습니다.' 라는 문장을 작성했을 때 '저는'이 중복되기 때문에 출력되는 단어 개수는 6개가 된다. 이런 경우까지 생각한다면 set은 적절하지 않은 것이라고 봐야 하는지? [❓❓❓]
ex)
const selfIntroduction = prompt('자기소개서를 작성하세요.').split(' ');
const set = new Set(selfIntroduction);
// 안녕하세요. 저는 누구입니다. 저는 어떠한 일을 했습니다. 를 입력했음
console.log(set.size); // => 6이 나옴


// 답안
const string = prompt('문자열을 입력하세요.').split(' ');

console.log(string.length);