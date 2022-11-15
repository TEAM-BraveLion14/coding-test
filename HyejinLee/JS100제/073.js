// # 문제73 : 최단 경로 찾기

// 다음과 같이 노드의 연결 관계가 리스트 형태로 주어집니다. 그다음 경로를 구할 두 정점이 공백으로 구분되어 주어질 것입니다. 

// 두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 프로그램을 작성해 주세요. 

// 이때 최단 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미합니다.


데이터
graph = {'A': ['B', 'C'],
         'B': ['A', 'D', 'E'],
         'C': ['A', 'F'],
         'D': ['B'],
         'E': ['B', 'F'],
         'F': ['C', 'E']}

입력
A F

출력
2

----------------------------------------------------------

// 내 코드
// 앞의 bfs 코드 참고
const graph = {'A': ['B', 'C'],
            'B': ['A', 'D', 'E'],
            'C': ['A', 'F'],
            'D': ['B'],
            'E': ['B', 'F'],
            'F': ['C', 'E']}


const shortestPath = (graph, first, last) => {
    let visited = [];
    // while을 돌기 위해 queue에 first 담아놓음
    let queue = [first];
    let count = 0;

    while(queue.length){
        for(let i = 0; i < queue.length; i++){
            let temp = queue.shift();
            if(temp[i] === last){
                return count
            }
            if(!visited.includes(temp)){    
                visited.push(temp);
                // graph의 키와 연결된 것들 탐색
                let sub = graph[temp].filter(x => !visited.includes(x));
                for(let i of sub){
                  queue.push(i);   
                }       
        }
    }
    // 다 돌고나면 count 1 증가
    count++

  }
}

console.log(shortestPath(graph, 'A', 'F'));

----------------------------------------------------------

// 답안
const graph = {'A': ['B', 'C'],
         'B': ['A', 'D', 'E'],
         'C': ['A', 'F'],
         'D': ['B'],
         'E': ['B', 'F'],
         'F': ['C', 'E']};

const user_input = prompt('입력해주세요').split(' ');
const start = user_input[0];
const end = user_input[1];

let queue = [start];
let visited = [start];

function solution(){
  let count = -1;
	
  while (queue.length !== 0){
    count += 1;
        
    let size = queue.length;

    for (let i=0; i<size; i++){let node = queue.splice(0,1);
			if (node == end){
                return count;
            }
            
			for (let next_node in graph[node]) {
                if (!visited.includes(graph[node][next_node])){
                    visited.push(graph[node][next_node]);
                    queue.push(graph[node][next_node]);
                    
                }	
            }
        }
    }
}
console.log(solution());