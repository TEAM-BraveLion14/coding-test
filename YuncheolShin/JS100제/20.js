const [a, b] = prompt('공백을 기준으로 두 숫자를 입력하세요.').split(' ');

console.log(Math.floor(+a / +b), +a % +b);
