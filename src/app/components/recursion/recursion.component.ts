import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recursion',
  templateUrl: './recursion.component.html',
  styleUrls: ['./recursion.component.css']
})
export class RecursionComponent implements OnInit {

  recursion=[];

  constructor() { }

  ngOnInit() {

    this.recursion.push(
      {
        "title":"Number of paths",
        "practice":"https://practice.geeksforgeeks.org/problems/number-of-paths/0",
        "solution":"https://www.geeksforgeeks.org/count-possible-paths-top-left-bottom-right-nxm-matrix/"
      },
      {
        "title":"Flood fill Algorithm",
        "practice":"https://practice.geeksforgeeks.org/problems/flood-fill-algorithm/0",
        "solution":"https://www.geeksforgeeks.org/flood-fill-algorithm-implement-fill-paint/"
      },
      {
        "title":"Josephus problem",
        "practice":"https://practice.geeksforgeeks.org/problems/game-of-death-in-a-circle/0",
        "solution":"https://www.geeksforgeeks.org/josephus-problem-set-1-a-on-solution/#:~:text=In%20computer%20science%20and%20mathematics,circle%20in%20a%20fixed%20direction."
      },
      {
        "title":"Special Keyboard",
        "practice":"https://practice.geeksforgeeks.org/problems/special-keyboard/0",
        "solution":"https://www.geeksforgeeks.org/how-to-print-maximum-number-of-a-using-given-four-keys/"
      },
      {
        "title":"Combination Sum",
        "practice":"https://practice.geeksforgeeks.org/problems/combination-sum-part-2/0",
        "solution":"https://www.geeksforgeeks.org/combinational-sum/"
      }
    )
  }

}
