import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {

  stack=[];

  constructor() { }

  ngOnInit() {

    this.stack.push(
      {
        "title":"Parenthesis Checker",
        "practice":"https://practice.geeksforgeeks.org/problems/parenthesis-checker/0",
        "solution":"https://www.geeksforgeeks.org/check-for-balanced-parentheses-in-an-expression/"
      },
      {
        "title":"Get minimum element from stack",
        "practice":"https://practice.geeksforgeeks.org/problems/get-minimum-element-from-stack/1",
        "solution":"https://www.geeksforgeeks.org/design-a-stack-that-supports-getmin-in-o1-time-and-o1-extra-space/"
      },
      {
        "title":"Next larger element",
        "practice":"https://practice.geeksforgeeks.org/problems/next-larger-element/0",
        "solution":"https://www.geeksforgeeks.org/next-greater-element/"
      }
    )
  }

}
