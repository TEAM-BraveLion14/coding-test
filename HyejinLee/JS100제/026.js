// 문제26 : 행성 문제2
// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

// 행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.


// 내 코드
const arrKorean = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
const arrEnglish = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

const question = prompt('원하는 행성 하나를 한글로 입력하세요.')

for(let i in arrKorean){
    if(question === arrKorean[i]){
        alert(arrEnglish[i]);
    }else if(question !== arrKorean[i]){
        alert('목록에 없는 행성입니다.');
    }
};

// 질문
else if 부분을 입력하는 글자가 arrKorean에 없을 시 alert('목록에 없는 행성입니다.'); 을 나오도록 작성했는데, 일부러 없는 글자를 입력 했더니, [❓❓❓] 수성부터 해왕성까지 alert 알림에서 8번 확인을 눌러야만 알림이 꺼졌음
 즉, 처음부터 끝까지 다 돈 다음에 알림이 꺼진 상황 
 그래서 else if 대신 else로도 해봤지만 마찬가지인 상황
 어떻게 해야 알림이 한 번만 뜨게 할 수 있을까? 
 arrKorean 목록에 있는 것을 입력했을 땐 예를 들어, 지구의 경우 세 번째 알림에서 Earth가 뜨는 상황 [❓❓❓] 

 => 배열 두개로 만드는 것 보다 하나의 객체로 만들어서 한글 자체를 키로 넣어서 구하도록 하기


// 내 코드 2
const planets = prompt('원하는 행성 하나를 한글로 입력하세요.')

    switch (planets){
        case '수성':
            alert('Mercury 입니다!');
            break;
        case '금성':
            alert('Venus 입니다!');
            break;
        case '지구':
            alert('Earth 입니다!');
            break;
        case '화성':
            alert('Mars 입니다!');
            break;
        case '목성':
            alert('Jupiter 입니다!');
            break;
        case '토성':
            alert('Saturn 입니다!');
            break;
        case '천왕성':
            alert('Uranus 입니다!');
            break;
        case '해왕성':
            alert('Neptune 입니다!');
            break;
        default:
            alert('그런 행성은 없습니다.');
    }


// 답안
const planets = {
    '수성' : 'Mercury',
    '금성' : 'Venus',
    '지구' : 'Earth',
    '화성' : 'Mars',
    '목성' : 'Jupiter',
    '토성' : 'Saturn',
    '천왕성' : 'Uranus',
    '해왕성' : 'Neptune',
};
    
const name = prompt("행성의 이름을 입력하세요.");
    
console.log(planets[name]);    