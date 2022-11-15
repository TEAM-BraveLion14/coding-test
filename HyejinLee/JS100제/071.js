// # 문제71 : 깊이 우선 탐색

// **깊이 우선 탐색**이란 목표한 노드를 찾기 위해 가장 우선순위가 높은 노드의 자식으로 깊이 들어갔다가 목표 노드가 존재하지 않으면 처음 방문한 노드와 연결된 다른 노드부터 그 자식 노드로 파고드는 검색 방법을 말합니다.


// 다음과 같이 리스트 형태로 노드들의 연결 관계가 주어진다고 할 때 깊이 우선 탐색으로 이 노드들을 탐색했을 때의 순서를 공백으로 구분하여 출력하세요.

데이터
graph = {'E': ['D', 'A'],
         'F': ['D'],
         'A': ['E', 'C', 'B'],
         'B': ['A'],
         'C': ['A'],
         'D': ['E','F']}


출력
E D F A C B

----------------------------------------------------------

[다시 풀어보기 📛📛📛]

// 내 코드
// 답안 코드 주석

graph = {'E': ['D', 'A'],
         'F': ['D'],
         'A': ['E', 'C', 'B'],
         'B': ['A'],
         'C': ['A'],
         'D': ['E','F']}


function dfs(graph, start){
  let visited = [];   // 방문 여부 확인
  let stack = [start];     // dfs는 stack 사용, 처음꺼는 일단 무조건 들어가 있는 상태

  // stack에 무언가가 남아있을 때까지만 진행 
  while(stack.length){
    // stack에서 제거하는 것을 temp에 넣어줌   
    let temp = stack.pop();   
    // 만약 visited에 temp가 포함되지 않다면(방문했던 것이 아니라면)
    if(!visited.includes(temp)){    
      visited.push(temp);
      // 각 키의 아래에 있는 것들을 살펴봄 ex) console.log(graph['E'])의 경우 ['D', 'A']
      // 방문했던 것이 아닌 것들을 sub에 넣어줌
      let sub = graph[temp].filter(x => !visited.includes(x));
      for(let i of sub){
        stack.push(i);
      }
    }
  }
  // 방문한 것들 return
  return visited;
}

console.log(dfs(graph, 'E').join(' '));   // E A B C D F
/**
[❓❓❓] 문제에 주어진 답과 다르게 나온 이유
: graph를 E F A 이런 순서로 나열하는 게 아니라
const graph = {'A': ['E', 'C', 'B'],
              'B': ['A'],
              'C': ['A'],
              'D': ['E','F'],
              'E': ['D', 'A'],
              'F': ['D'],
              }
이렇게 A 부터 순서대로 놓고 시작하면 E D F A C B 로 나옴
하지만 결국 E A B C D F도 정답이라 상관없음
*/
----------------------------------------------------------
{/* 
<폐기 코드>
// 이미 탐색한 것은 필요없음
const graph = {'E': ['D', 'A'],
                'F': ['D'],
                'A': ['E', 'C', 'B'],
                'B': ['A'],
                'C': ['A'],
                'D': ['E','F']}


const firstKeyE = Object.keys(graph)[0];
// E가 무조건 처음이므로 넣어놓음
let stack = [firstKeyE];
let result = [];

// stack에 남아있을 때까지만
while(stack.length){
    let temp = []
    temp.push(stack.pop());     // DFS는 선입후출 (LIFO)

    
}

console.log(); 
*/}
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
  
  
  function dfs(graph, start){
    let visited = [];
    let stack = [start];
  
    while (stack.length !== 0){
      let n = stack.pop();
      if (!visited.includes(n)){
        visited.push(n);
        let sub = graph[n].filter(x => !visited.includes(x));
        for(let i of sub) {
          stack.push(i);
        }
      }
    }
    return visited;
  }
  
  
  console.log(dfs(graph, 'E'));