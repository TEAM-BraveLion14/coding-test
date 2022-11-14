/****깊이 우선 탐색**이란 목표한 노드를 찾기 위해 가장 우선순위가 높은 노드의 자식으로 깊이 들어갔다가 목표 노드가 존재하지 않으면 처음 방문한 노드와 연결된 다른 노드부터 그 자식 노드로 파고드는 검색 방법을 말합니다.

다음과 같이 리스트 형태로 노드들의 연결 관계가 주어진다고 할 때 깊이 우선 탐색으로 이 노드들을 탐색했을 때의 순서를 공백으로 구분하여 출력하세요.*/

const graph = {
  A: ['E', 'C', 'B'],
  B: ['A'],
  C: ['A'],
  D: ['E', 'F'],
  E: ['D', 'A'],
  F: ['D'],
};

// 이게 답이기 위한 조건..
// graph의 value가 항상 depth가 낮은게 앞으로.. 깊은게 뒤로 (쉽게 말하면 부모가 앞으로 자식이 뒤로 나와야함)

const dfs = (graph, start) => {
  const visited = [];
  const stack = [start];

  while (stack.length !== 0) {
    let n = stack.pop();
    console.log(n, visited, graph[n]);
    if (!visited.includes(n)) {
      visited.push(n);
      const unVisitedNode = graph[n].filter((e) => !visited.includes(e));
      unVisitedNode.forEach((e) => stack.push(e));
    }
  }

  return visited;
};

//출력
//E D F A C B
