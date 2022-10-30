// 문제41 : 소수판별

// 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
// (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)


// 내 코드
const input = parseInt(prompt('숫자 하나를 입력해주세요.'), 10);

const result = input =>{
    if(input === 0 || input === 1){
        return 'NO'
    }else if(input === 2){
        return 'YES'
    }
    // 처음에는 이 아래 부분만 작성 했다가 0, 1, 2를 입력했을 때에는 undefined가 나와서 위의 if문을 추가함 [❓❓❓]
    for(let i = 2; i < input; i++){
        if(input % i === 0 || input === 1){ 
            return 'NO'
        }else{
            return 'YES'
        }
    }

}

console.log(result(input));


// 답안
const prime = prompt('숫자를 입력하세요.');

function primeFunc(n){
    for(let i = 2; i < n; i++){
        if(n % i === 0){
            console.log('NO');
            return false;
        }
    }
    if(n === 1){
        console.log('NO');
        return;
    }
    console.log('YES');
}

primeFunc(prime);