/**다음과 같이 노드의 연결 관계가 리스트 형태로 주어집니다. 그다음 경로를 구할 두 정점이 공백으로 구분되어 주어질 것입니다. 

두 정점 사이를 이동할 수 있는 최단 거리를 출력하는 프로그램을 작성해 주세요. 

이때 최단 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 갈 수 있는 가장 적은 간선의 수를 의미합니다.*/

const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'F'],
  D: ['B'],
  E: ['F'],
  F: ['C', 'E'],
};

/**
 * dfs
 * A => [B, C] => [[A(v) D E], C] => [[A(v), [B(v)], E], C]
 * => [[A(v), [B(v)], [B(v), F]], C] => []
 */

/**
 * bfs
 * A에서 F까지 => A에 F가 있는지? 없음 ['B', 'C'] => B에 F가 있는지? 없음
 * ['C', 'A'(v), 'D', 'E'] => C에 F가 있는지? 있음 => 2스텝 */

const getShortestLen = (graph, node, targetNode) => {
  let step = 1;
  const visited = [];
  const nodes = [node];

  while (nodes.length > 0) {
    const tmpNodes = [...nodes];

    for (let i = 0; i < tmpNodes.length; i++) {
      if (graph[tmpNodes[i]].includes(targetNode)) {
        return step;
      } else {
        visited.push(nodes.shift());
      }
    }

    tmpNodes.forEach((node) =>
      graph[node].forEach((e) => !visited.includes(e) && nodes.push(e))
    );
    step += 1;
  }

  return -1;
};
