// 문제12 : 게임 캐릭터 클래스 만들기
// 다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 '파이어볼'이 출력되게 만드시오.
// 주어진 소스 코드를 수정해선 안됩니다.

데이터
<여기에 class를 작성하세요.>

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();


출력
545 210 10
파이어볼


// 답안
const Wizard = class Wizard {
    // constructor 함수는 객체에서 인스턴스가 생성될 때 반드시 실행되는 함수이다.(객체를 초기화 하는 역할)
    constructor (health, mana, armor){
        // this.health 의 의미: 이 health는 Wizard 클래스를 통해 만들어진 인스턴스 health이다. 그리고 그 health는 constructor 생성자 함수의 매개변수로 받고 있는 health, mana, armor 이러한 값을 대입해준다.
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack(){
        console.log('파이어볼');
    }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();