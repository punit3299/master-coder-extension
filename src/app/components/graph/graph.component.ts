import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  graph=[];

  constructor() { }

  ngOnInit() {

    this.graph.push(
      {
        "title":"DFS of Graph",
        "practice":"https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1",
        "solution":"https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/"
      },
      {
        "title":"BFS of graph",
        "practice":"https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",
        "solution":"https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/"
      },
      {
        "title":"Topological sort",
        "practice":"https://practice.geeksforgeeks.org/problems/topological-sort/1",
        "solution":"https://www.geeksforgeeks.org/topological-sorting/"
      },
      {
        "title":"Detect cycle in an undirected graph",
        "practice":"https://www.geeksforgeeks.org/detect-cycle-in-an-undirected-graph-using-bfs/",
        "solution":"https://www.geeksforgeeks.org/detect-cycle-undirected-graph/"
      },
      {
        "title":"Detect cycle in a directed graph",
        "practice":"https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1",
        "solution":"https://www.geeksforgeeks.org/detect-cycle-in-a-graph/"
      },
      {
        "title":"Find the number of islands",
        "practice":"https://practice.geeksforgeeks.org/problems/find-the-number-of-islands/1",
        "solution":"https://www.geeksforgeeks.org/find-number-of-islands/"
      },
      {
        "title":"Implementing Dijkstra Algorithm",
        "practice":"https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1",
        "solution":"https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/"
      },
      {
        "title":"Find whether path exist",
        "practice":"https://practice.geeksforgeeks.org/problems/find-whether-path-exist/0",
        "solution":"https://www.geeksforgeeks.org/find-whether-path-two-cells-matrix/"
      },
      {
        "title":"Snake and Ladder Problem",
        "practice":"https://practice.geeksforgeeks.org/problems/snake-and-ladder-problem/0",
        "solution":"https://www.geeksforgeeks.org/snake-ladder-problem-2/"
      },
      {
        "title":"Minimum Swaps to Sort",
        "practice":"https://practice.geeksforgeeks.org/problems/minimum-swaps/1",
        "solution":"https://www.geeksforgeeks.org/minimum-number-swaps-required-sort-array/"
      },
      {
        "title":"Strongly connected component (Tarjans's Algo)",
        "practice":"https://practice.geeksforgeeks.org/problems/strongly-connected-component-tarjanss-algo/0",
        "solution":"https://www.geeksforgeeks.org/tarjan-algorithm-find-strongly-connected-components/"
      },
      {
        "title":"Shortest Source to Destination Path",
        "practice":"https://www.geeksforgeeks.org/shortest-distance-two-cells-matrix-grid/",
        "solution":"https://www.geeksforgeeks.org/shortest-path-in-a-binary-maze/"
      },
      {
        "title":"Circle of strings",
        "practice":"https://practice.geeksforgeeks.org/problems/circle-of-strings/0",
        "solution":"https://www.geeksforgeeks.org/given-array-strings-find-strings-can-chained-form-circle/"
      },
      {
        "title":"Floyd Warshall",
        "practice":"https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall/0",
        "solution":"https://www.geeksforgeeks.org/floyd-warshall-algorithm-dp-16/"
      },
      {
        "title":"Alien Dictionary",
        "practice":"https://practice.geeksforgeeks.org/problems/alien-dictionary/1",
        "solution":"https://www.geeksforgeeks.org/given-sorted-dictionary-find-precedence-characters/"
      }
    )
  }

}
