// https://seminkang.notion.site/JS-100-2146e3620dad4da0bad1eedb921a2108

function mineMaxNum(){
    const inp = prompt("수색할 도시의 크기와 한 번에 수색 가능한 범위를 띄어쓰기로 구분해 입력해주세요. 예) 5 3").split(' ').map(Number);
    const citySize = inp[0];
    const searchRange = inp[1];
    const mineMap = [];
    let result = 0;
    for (let i = 0; i < citySize; i++){
        const eachMap = prompt("띄어쓰기로 구분해 데이터 입력").split(' ').map(Number);
        mineMap.push(eachMap);
    }

    for (let i = 0; i <= citySize - searchRange; i++){
        // console.log(i);
        for (let j = 0; j <= citySize - searchRange; j++){
            // console.log(j);
            let k = 0;
            let eachRes = 0;
            while (k < searchRange){
                // console.log(k);
                // 깊은 복사
                // https://velog.io/@th0566/Javascript-%EC%96%95%EC%9D%80-%EB%B3%B5%EC%82%AC-%EA%B9%8A%EC%9D%80-%EB%B3%B5%EC%82%AC
                const copiedArr = JSON.parse(JSON.stringify(mineMap));
                const item = copiedArr[i + k].splice(j, searchRange);
                console.log(item);
                const numOf1 = item.filter(e => e === 1).length;
                console.log(numOf1);
                eachRes += numOf1;
                console.log(eachRes);
                k++;
            }
            if (eachRes > result){
                result = eachRes;
            }
        }
    }
    
    return result;
}