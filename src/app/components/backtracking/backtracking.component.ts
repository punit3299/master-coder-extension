import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backtracking',
  templateUrl: './backtracking.component.html',
  styleUrls: ['./backtracking.component.css']
})
export class BacktrackingComponent implements OnInit {

  backtracking=[];

  constructor() { }

  ngOnInit() {
    this.backtracking.push(
      {
        "title":"Rat in a Maze Problem",
        "practice":"https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",
        "solution":"https://www.geeksforgeeks.org/rat-in-a-maze-backtracking-2/"
      },
      {
        "title":"Word Boggle",
        "practice":"https://practice.geeksforgeeks.org/problem-page.php?pid=1653",
        "solution":"https://www.geeksforgeeks.org/boggle-find-possible-words-board-characters/"
      },
      {
        "title":"Generate IP Addresses",
        "practice":"https://practice.geeksforgeeks.org/problems/generate-ip-addresses/1",
        "solution":"https://www.geeksforgeeks.org/program-generate-possible-valid-ip-addresses-given-string/"
      },
      {
        "title":"N-Queen Problem",
        "practice":"https://practice.geeksforgeeks.org/problems/n-queen-problem/0",
        "solution":"https://www.geeksforgeeks.org/n-queen-problem-backtracking-3/"
      },
      {
        "title":"Solve the Sudoku",
        "practice":"https://practice.geeksforgeeks.org/problems/solve-the-sudoku/0",
        "solution":"https://www.geeksforgeeks.org/sudoku-backtracking-7/"
      }
    )
  }

}
