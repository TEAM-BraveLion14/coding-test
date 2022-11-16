// # 문제74 : 최장 경로 찾기

// 다음과 같이 노드의 연결 관계가 주어집니다. 
// 입력으로는 경로를 구할 두 정점의 번호가 공백으로 구분되어 주어집니다. 
// 우리는 **이 두 정점으로 가기 위한 최대 거리**를 구하고자 합니다. 

// 최대 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 경유할 수 있는 가장 많은 간선의 수를 뜻합니다.

	
데이터
graph = {1: [2, 3, 4],
		2: [1, 3, 4, 5, 6],
		3: [1, 2, 7],
		4: [1, 2, 5, 6],
		5: [2, 4, 6, 7],
		6: [2, 4, 5, 7],
		7: [3, 5, 6]}


입력
1 7

출력
6

----------------------------------------------------------
[다시 풀어보기 📛📛📛]

// 내 코드
graph = {1: [2, 3, 4],
	2: [1, 3, 4, 5, 6],
	3: [1, 2, 7],
	4: [1, 2, 5, 6],
	5: [2, 4, 6, 7],
	6: [2, 4, 5, 7],
	7: [3, 5, 6]}

function longest(graph, first, last) {
  const visited = [];
  const stack = [first];
  let count = 0;

  while (stack.length > 0) {
    for (let i = 0; i < stack.length; i++) {
      count++;
      let temp = stack.pop();
      if (temp === last) {
        return count;
      }
      const sub = graph[temp].filter((x) => !visited.includes(x));
      for (let s of sub) {
        stack.push(s);
      }
    }
  }
  return count;
}

console.log(longest(graph, 1, 7));	// 4

----------------------------------------------------------
/**
<주의>	[❓❓❓]
어디를 거치느냐에 따라 최장거리가 달라질 수 있다.
ex)
1->7로 가는 경로의 경우
1->2->5->6->7
1->3->7
이런 식으로 거리 차이가 난다.
또한, 최장 거리는 구하는 게 무조건 1부터 시작이란 보장도 없다.
따라서 모든 지점마다 dfs를 해보며 최장 경로를 따져야 한다.


<한계점> [📛📛📛]
개념이 확실히 안잡힌 상태에서 하려니까 앞에서 본 답안 코드로만 돌려막기 하고 있다. 
그것 마저도 이 문제에서는 정답이 틀린 상황
이후에 천천히 뜯어보자..
*/
----------------------------------------------------------

{/* <폐기>
graph = {1: [2, 3, 4],
	2: [1, 3, 4, 5, 6],
	3: [1, 2, 7],
	4: [1, 2, 5, 6],
	5: [2, 4, 6, 7],
	6: [2, 4, 5, 7],
	7: [3, 5, 6]}

function longest(graph, now, last){
	let visited = [];
	let now;
	// 현재 노드가 마지막 지점에 도달하는 순간 길이 반환
	if(now === last){
		return visited.length;
	}
	// 현재 노드가 visited에 속하지 않는다면 visited에 추가
	if(!visited.includes(now)){
		visited.push(now);
	}else{	// 만약 속한 상태라면 

	}
} */}

----------------------------------------------------------

// 답안
const graph = {1: [2, 3, 4],
	2: [1, 3, 4, 5, 6],
	3: [1, 2, 7],
	4: [1, 2, 5, 6],
	5: [2, 4, 6, 7],
	6: [2, 4, 5, 7],
	7: [3, 5, 6]};

const user_input = prompt('입력해주세요').split(' ');
const start = parseInt(user_input[0], 10);
const end = parseInt(user_input[1], 10);

let queue = [start];
let visited = [];

function sol(n, visited){
let node = n[n.length-1];
let length = 0;

if (node == end) {
return visited.length;
}

if (visited.includes(node)) {
return visited.length;
} else {
visited.push(node);
}
let max = [];

for (let next_node in graph[node]) {
n.push(graph[node][next_node]);

max.push(length, sol(n, visited));
length = Math.max.apply(null, max);

queue.pop();
}
return length;
}

console.log(sol(queue, visited));