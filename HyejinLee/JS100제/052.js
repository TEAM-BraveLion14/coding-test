// # 문제52 : quick sort

// 다음 빈 칸을 채워 퀵 정렬을 완성해주세요.

function quickSort(arr){
    if (arr.length <= 1){
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i=1; i<arr.length; i++){
      if(/*빈칸을 채워주세요*/){
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return /*빈칸을 채워주세요*/
  }
  
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(quickSort(array));


  // 내 답안
  // 퀵 정렬은 어떤 하나의 기준점(pivot)이 있고, 그 기준점을 중심으로 좌우가 나뉘어짐 (기준점의 왼쪽은 더 작은 것들, 오른쪽은 더 큰 것들)
  function quickSort(arr){
    if (arr.length <= 1){
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    // 순회하는데, 기준점(pivot)보다 작으면 왼쪽, 크면 오른쪽에 추가
    for (let i=1; i<arr.length; i++){
      if(arr[i] < pivot){
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    // 위에서 정렬된 것들을 쭉 나열해주기 (이때 pivot은 당연히 가운데 위치)
    return [quickSort(left) + pivot + quickSort(right)];
  }
  
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(quickSort(array));


  // 답안
  function quickSort(arr){
    if (arr.length <= 1){
      return arr;
    }
  
    const pivot = arr[0]; //기준점
    const left = [];
    const right = [];
  
    for (let i=1; i<arr.length; i++){
      if(arr[i] < pivot){ 
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
  }
  
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(quickSort(array));