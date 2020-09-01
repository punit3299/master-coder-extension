import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {

  dc=[];

  constructor() { }

  ngOnInit() {
    
    this.dc.push(
      {
        "title":"Find element that appears once in sorted array",
        "practice":"https://practice.geeksforgeeks.org/problems/find-the-element-that-appears-once-in-sorted-array/0",
        "solution":"https://www.geeksforgeeks.org/find-the-element-that-appears-once-in-a-sorted-array/"
      },
      {
        "title":"Search in a Rotated Array",
        "practice":"https://practice.geeksforgeeks.org/problems/search-in-a-rotated-array/0",
        "solution":"https://www.geeksforgeeks.org/search-an-element-in-a-sorted-and-pivoted-array/"
      },
      {
        "title":"Binary Search",
        "practice":"https://practice.geeksforgeeks.org/problems/who-will-win/0",
        "solution":"https://www.geeksforgeeks.org/binary-search/"
      },
      {
        "title":"Sum of Middle Elements of two sorted arrays",
        "practice":"https://practice.geeksforgeeks.org/problems/sum-of-middle-elements-of-two-sorted-arrays/0",
        "solution":"https://www.geeksforgeeks.org/median-of-two-sorted-arrays/"
      },
      {
        "title":"Quick Sort",
        "practice":"https://www.geeksforgeeks.org/find-the-missing-number/",
        "solution":"https://www.geeksforgeeks.org/quick-sort/"
      },
      {
        "title":"Merge Sort",
        "practice":"https://practice.geeksforgeeks.org/problems/merge-sort/1",
        "solution":"https://www.geeksforgeeks.org/merge-sort/"
      },
      {
        "title":"K-th element of two sorted Arrays",
        "practice":"https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array/0",
        "solution":"https://www.geeksforgeeks.org/k-th-element-two-sorted-arrays/"
      }
    )
    
  }

}
