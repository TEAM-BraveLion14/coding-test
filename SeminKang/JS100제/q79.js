function 리스트순회(리스트){
    const 순회횟수 = parseInt(prompt("순회횟수는 : "), 10);
    const 순회전리스트 = [...리스트];
    console.log(순회전리스트);
    for (let i = 0; i < 순회횟수; i++){
        리스트.unshift(리스트.pop());
    }
    console.log(리스트);
    let 최소값 = Infinity;
    let 순회전최소;
    let 순회후최소;
    let 최소인덱스;
    for (const i in 순회전리스트){
        const 순회전요소 = 순회전리스트[i];
        const 순회후요소 = 리스트[i];
        const 차이 = Math.abs(순회전요소 - 순회후요소);
        console.log(순회전요소, 순회후요소, 차이);
        if (차이 <= 최소값){
            최소값 = 차이;
            순회전최소 = 순회전요소;
            순회후최소 = 순회후요소;
            최소인덱스 = i;
        }
    }
    console.log(`index : ${최소인덱스}
value : ${순회전최소}, ${순회후최소}`);
}