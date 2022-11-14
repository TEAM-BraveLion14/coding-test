// # 문제70 : 행렬 곱하기

// 행렬 2개가 주어졌을 때 곱할 수 있는 행렬인지 확인하고 곱할 수 있다면 그 결과를 출력하고,
// 곱할 수 없다면 -1을 출력하는 프로그램을 만들어주세요.

입력
a = [[1, 2],
	[2, 4]]

b = [[1, 0],
	[0, 3]]

출력
[[1, 6],
[2, 12]]

----------------------------------------------------------

// 내 코드
a = [[1, 2],
	[2, 4]]

b = [[1, 0],
	[0, 3]]

const check = (a, b) => {
	// 각각의 행과 열에 포함된 개수가 같아야 곱이 가능
	if(a[0].length !== (b[0].length + b[1].length) / 2){
		return -1;
	}else{
		let output = [];
		let left = [];
		let right = [];
		left.push(
			a[0][0] * b[0][0] + a[0][1]  * b[1][0],
			a[0][0] * b[0][1] + a[0][1]  * b[1][1]
		)
		right.push(
			a[1][0] * b[0][0] + a[1][1]  * b[1][0],
			a[1][0] * b[0][1] + a[1][1]  * b[1][1]
		)
		output.push(left, right);

		return output;
	}
}

console.log(check(a, b));

----------------------------------------------------------

// 답안
function solution(a, b) {
    let c = [];
    const len = a[0].length;

    if (len === b.length){
        for(let i=0; i<len; i++){
            let row = [];
            for(let j=0; j<len; j++){
                let x = 0;
                for(let k=0; k<len; k++){
                    x += a[i][k]*b[k][j];
                }
                row.push(x);
            }
            c.push(row);
        }
        return c;
    } else {
        return -1;
    }
}

const a = [[1, 2], [2, 4]];
const b = [[1, 0], [0, 3]];

console.log(solution(a, b));