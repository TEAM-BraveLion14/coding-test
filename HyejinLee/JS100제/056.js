// # 문제56 : 객체의 함수 응용

// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

데이터
nationWidth = {
     'Korea': 220877,
     'Russia': 17098242,
     'China': 9596961,
     'France': 543965,
     'Japan': 377915,
     'England' : 242900,
}

출력
England 22023


// 내 코드
// 1. pivot 정렬(퀵 정렬) 사용하여 면적 크기를 순서대로 정렬
nationWidth = {
         'Korea': 220877,
         'Russia': 17098242,
         'China': 9596961,
         'France': 543965,
         'Japan': 377915,
         'England' : 242900,
}

const arrNation = [220877, 17098242, 9596961, 543965, 377915, 242900];

function quickSort(arrNation){
    if(arrNation.length <= 1){
        return arrNation;
    }
    
let pivot = [arrNation[0]];
let left = [];
let right = [];
// pivot이 첫 번째로 갔으므로 i = 1부터 시작
for(let i = 1; i < arrNation.length; i++){
    if(arrNation[i] < pivot){
        left.push(arrNation[i]);
    }else if(arrNation[i] > pivot){
        right.push(arrNation[i]);
    }else{
        pivot.push(arrNation[i]);
    }
}
return quickSort(left).concat(pivot, quickSort(right));  
}

// // 면적 크기 순서는 다음과 같이 나옴
// console.log(quickSort(arrNation)); // [220877, 242900, 377915, 543965, 9596961, 17098242]


// 2. 한국 면적이 quickSort(arrNation)[0]에 있으므로 i는 1부터 찾기 시작하면 됨
let diff = [];
for(let i = 1; i < quickSort(arrNation).length; i++){
    // 각 나라 면적 - 한국 면적 한 것을 diff 배열에 담음
    // diff 구한 값이 하나의 숫자로 모두 붙어 나와서 + ' ' 을 사용하여 공백을 만들어 주고, split으로 공백 기준으로 하여 나눔
    diff = (diff + (quickSort(arrNation)[i] - quickSort(arrNation)[0] +' ')).split(' ')
}
// console.log 찍어보면 아래와 같이 배열 상태가 불안정한 상태
// console.log(diff); // ['22023,157038,323088,9376084,16877365', '']


// 3. 따라서 ,를 기준으로 diff의 첫 번째 부분을 배열로 만들고 숫자로 변환함
const makeDiffArr = diff[0].split(',').map(Number)
// console.log(makeDiffArr); // [22023, 157038, 323088, 9376084, 16877365]


// 이미 위에서 피벗 정렬을 통해 면적 크기 자체를 순서대로 정렬했기 때문에 면적의 차이를 또 다시 정렬할 필요가 없음


// 4. Korea를 입력했을 때 답이 나오도록 함
const Korea = prompt('Korea를 입력하세요.');

// 객체의 키-값 쌍 배열 반환을 위해 entries 사용
const toArr = Object.entries(nationWidth);
// console.log(toArr); // [[], [], ... []] 형태

let result = [];
for(let i = 0; i < toArr.length; i++){
    if(quickSort(arrNation)[1] === toArr[i][1]){
        result += `${toArr[i][0]}, ${makeDiffArr[0]}`
        console.log(result);
    }
}


// 답안
const nationWidth = {
	'korea': 220877,
	'Rusia': 17098242,
	'China': 9596961,
	'France': 543965,
	'Japan': 377915,
	'England' : 242900,
};

const w = nationWidth['korea'];

delete nationWidth['korea'];

const entry = Object.entries(nationWidth);
const values = Object.values(nationWidth);

//gap에 최댓값 저장
let gap = Math.max.apply(null, values);
let item = [];

for (let i in entry){
  if (gap > Math.abs(entry[i][1] - w)){
    gap = Math.abs(entry[i][1] - w);
    item = entry[i];
  }
}

console.log(item[0], item[1] - w);