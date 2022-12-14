# 문제79 : 순회하는 리스트

다음의 값이 주어졌을 때

l = [10, 20, 25, 27, 34, 35, 39]

n번 순회를 결정합니다. 예를 들어 2번 순회하면

l = [35, 39, 10, 20, 25, 27, 34]

여기서 변하기 전 원소와 변한 후 원소의 값의 차가 가장 작은 값을 출력하는 프로그램을 작성하세요.

예를 들어 2번 순회했을 때 변하기 전의 리스트와 변한 후의 리스트의 값은 아래와 같습니다.

순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]
리스트의_차 = [25, 19, 15, 7, 9, 8, 5]

39와 변한 후의 34 값의 차가 5이므로 리스트의 차 중 최솟값입니다. 따라서 39와 34의 인덱스인 6과 39와 34를 출력하는 프로그램을 만들어주세요.

입력
순회횟수는 : 2

출력
index : 6
value : 39, 34

---

입력
순회횟수는 : 3

출력
index : 5
value : 35, 25

----------------------------------------------------------

// 내 코드
const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const n = parseInt(prompt('순회횟수는?'), 10);

function rotate(inL, inN){
    // <빈칸을 채워주세요>

    let afterList = [...l]    // 수정할 배열 복사
    for(let i = 0; i < inN; i++){
        afterList.unshift((afterList.pop()))     // 맨 뒤 제거->제일 앞에 넣어줌
    }
    let diffArr = [];
    for(let i = 0; i < l.length; i++){
        diffArr.push(Math.abs(l[i] - afterList[i]))   // [25, 19, 15, 7, 9, 8, 5]
    }
    // 최솟값
    let minimum = Math.min(...diffArr)
    // console.log(minimum);

    // 인덱스 찾기
    let whatIndex = diffArr.findIndex(x => x === minimum)   // 6
    // console.log(whatIndex);

    // 인덱스 해당 값
    let findValueFisrt = l[whatIndex]
    let findValueSecond = afterList[whatIndex]

    console.log(`index : ${whatIndex}\nvalue : ${findValueFisrt}, ${findValueSecond}`);
}

rotate(l, n)

----------------------------------------------------------

// 답안
function rotate(a, t){
    let b = a.slice();
    let c = [];
    for (let i = 0; i < t; i++){
        b.unshift(b.pop());
    }

    for (let i in a){ // let i in b 로 해도됩니다.
        c.push(Math.abs(a[i]-b[i]));
    }

    //최솟값
    const m = Math.min.apply(null, c);
		
		//최솟값의 인덱스 구하기
    let index = c.indexOf(m);

    console.log("index :", index);
    console.log("value :", a[index], b[index]);
}

const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const turn = prompt('순회 횟수는?');

rotate(l, turn);