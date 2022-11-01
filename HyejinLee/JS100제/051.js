// # 문제51 : merge sort를 만들어보자

// 병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.

// > 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는

// 2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.

// 3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.

// 4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
// > 

// 출처 : 위키피디아

// 다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다.

function mergeSort(arr){
    if (arr.length <= 1){
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right){
    let result = [];
  
    while (/*빈칸을 채워주세요*/ && /*빈칸을 채워주세요*/){
      if (/*빈칸을 채워주세요*/){
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) {
      /*빈칸을 채워주세요*/
    }
    while (right.length) {
      /*빈칸을 채워주세요*/
    }
  
    return result;
  }
  
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(mergeSort(array));


  // 내 코드
  function mergeSort(arr){
    // 길이가 1보다 작거나 같으면 더 이상 둘로 나눌 수 없으니까 return으로 반환 처리
    if (arr.length <= 1){
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0,mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  // 왼쪽 오른쪽으로 나눠진 것이 합쳐짐
  function merge(left, right){
    let result = [];
  
    // 값이 left와 right 둘 다 있을 때의 상황
    // 왼쪽의 길이와 오른쪽의 길이가 0이 아닐때 즉, false가 아닌 true일때 라고 생각함
    // 주의! 2===true가 될 수 없다는 특성을 생각해야 한다.(아래 사이트는 관련 내용)
    //  https://stackoverflow.com/questions/16729681/javascript-the-confuse-about-comparison-2-true[❓❓❓]
    while (left.length === true && right.length === true){   
      // 왼쪽과 오른쪽을 비교해서 왼쪽의 첫 번째 값이 더 작으면 그대로 빼내서 result(빈 배열)에 추가
      if (left[0] < right[0]){
        result.push(left.shift());
        // 오른쪽도 마찬가지로 오른쪽의 첫 번째 값이 더 작게 되면 그것을 result에 추가해가며 result에 채워넣음
      } else {
        result.push(right.shift());
      }
    }
    // left만 남았을 때 상황
    while (left.length) {
      // 위의 경우와 비슷하게 생각하면 됨
      result.push(left.shift())
    }
    // right만 남았을 때 상황
    while (right.length) {
      // 위의 경우와 비슷하게 생각하면 됨
      result.push(right.shift());
    }
  
    return result;
  }
  
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(mergeSort(array));


  // 답안
  function mergeSort(arr){

    if (arr.length <= 1){
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
  
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right){
    let result = [];
  
    while (left.length && right.length){
      if (left[0] < right[0]){
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
  
    return result;
  }
  
  
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
  
  console.log(mergeSort(array));