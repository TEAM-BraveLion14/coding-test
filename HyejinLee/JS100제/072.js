// # 문제72 : 너비 우선 탐색

// **너비 우선 탐색**이란 어떤 노드를 방문하여 확인한 후, 목표한 노드가 아니면 그 노드와 연결된 정점들 중에서 우선순위가 동일한 다른 노드를 찾고 그 순위에 없으면 그다음 순위 노드를 차례대로 찾는 방법이다.


// 다음과 같이 입력이 주어질 때 **너비 우선 탐색을 한 순서대로 노드의 인덱스를 공백 구분으로 출력하세요.**

데이터
graph = {'E': ['D', 'A'],
         'F': ['D'],
         'A': ['E', 'C', 'B'],
         'B': ['A'],
         'C': ['A'],
         'D': ['E','F']}

출력
E D A F C B

----------------------------------------------------------

// 내 코드
// 71번때의 답안 코드 참고
const graph = {'E': ['D', 'A'],
              'F': ['D'],
              'A': ['E', 'C', 'B'],
              'B': ['A'],
              'C': ['A'],
              'D': ['E','F']}


const bfs = (graph, start) => {
  let visited = [];
  let queue = [start];    // bfs는 queue

  while(queue.length){
    // 너비 우선 탐색(BFS)은 선입선출 (FIFO)
    // 앞선 dfs와 다른 점은 shift 하나
    let temp = queue.shift();  
    // temp에 담긴 것의 방문여부 확인 
    if(!visited.includes(temp)){    
      visited.push(temp);
      // graph의 키와 연결된 것들 탐색
      let sub = graph[temp].filter(x => !visited.includes(x));
      for(let i of sub){
        queue.push(i);
      }
    }
  }
  // queue에 남은 것이 없을 경우 return
  return visited;
}

console.log(bfs(graph, 'E').join(' '));
//  E D A F C B

----------------------------------------------------------

// 답안
const graph = {
    'A': ['E', 'C', 'B'],
    'B': ['A'],
    'C': ['A'],
    'D': ['E','F'],
    'E': ['D', 'A'],
    'F': ['D'],
  };
  
  function bfs(graph, start){
    let visited = [];
    let queue = [start];
  
    while (queue.length !== 0){
      let n = queue.shift();
      if (!visited.includes(n)){
        visited.push(n);
        let sub = graph[n].filter(x => !visited.includes(x));
        for(let i of sub){
          queue.push(i);
        }
      }
    }
    return visited;
  }
  
  console.log(bfs(graph, 'E'));