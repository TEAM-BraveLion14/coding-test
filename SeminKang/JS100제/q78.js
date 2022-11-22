function 원형테이블(n, k){
    const arr = Array(n).fill(1).map((_, i) => _ + i);
    let 먹을예정 = arr[0];
    while(arr.length > 2) {
        const 기준인덱스 = arr.indexOf(먹을예정);
        arr.splice(기준인덱스, 1);
        console.log(arr);
        if (arr[기준인덱스 + k - 1]){
            먹을예정 = arr[기준인덱스 + k - 1];
        } else {
            먹을예정 = arr[기준인덱스 + k - 1 - arr.length];
        }
    }
    return arr;
}

원형테이블(6, 3);
원형테이블(6, 4);