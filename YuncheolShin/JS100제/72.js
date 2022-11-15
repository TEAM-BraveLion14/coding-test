/****너비 우선 탐색**이란 어떤 노드를 방문하여 확인한 후, 목표한 노드가 아니면 그 노드와 연결된 정점들 중에서 우선순위가 동일한 다른 노드를 찾고 그 순위에 없으면 그다음 순위 노드를 차례대로 찾는 방법이다.

다음과 같이 입력이 주어질 때 **너비 우선 탐색을 한 순서대로 노드의 인덱스를 공백 구분으로 출력하세요.*/

const graph = {
  E: ['D', 'A'],
  F: ['D'],
  A: ['E', 'C', 'B'],
  B: ['A'],
  C: ['A'],
  D: ['E', 'F'],
};

/**
 * E => [D A] => D => [A E(v) F] => A [E(v) F E(v) C B] (E는 이미 지나갔으니 필터)
 * => F [C B D(v)] => ...
 */

const bfs = (graph, node) => {
  const result = [];
  const nodes = [node];

  while (nodes.length > 0) {
    const curNode = nodes.shift();

    result.push(curNode);
    graph[curNode].forEach((e) => !result.includes(e) && nodes.push(e));
  }

  return result;
};

console.log(bfs(graph, 'E'));
