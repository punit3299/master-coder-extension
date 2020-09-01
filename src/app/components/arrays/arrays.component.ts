import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent implements OnInit {

  arrays=[];

  constructor() { }

  ngOnInit() {
    this.arrays.push(
      {
        "title":"Missing number in array",
        "practice":"https://practice.geeksforgeeks.org/problems/missing-number-in-array/0",
        "solution":"https://www.geeksforgeeks.org/find-the-missing-number/"
      },
      {
        "title":"Majority Element",
        "practice":"https://practice.geeksforgeeks.org/problems/majority-element/0",
        "solution":"https://www.geeksforgeeks.org/majority-element/"
      },
      {
        "title":"Leaders in an Array",
        "practice":"https://practice.geeksforgeeks.org/problems/leaders-in-an-array/0",
        "solution":"https://www.geeksforgeeks.org/leaders-in-an-array/"
      },
      {
        "title":"Equilibrium Point",
        "practice":"https://practice.geeksforgeeks.org/problems/equilibrium-point/0",
        "solution":"https://www.geeksforgeeks.org/equilibrium-index-of-an-array/"
      },
      {
        "title":"Subarray with Given Sum",
        "practice":"https://practice.geeksforgeeks.org/problems/subarray-with-given-sum/0",
        "solution":"https://www.geeksforgeeks.org/find-subarray-with-given-sum/"
      },
      {
        "title":"Sort an array of 0s, 1s and 2s",
        "practice":"https://practice.geeksforgeeks.org/problems/sort-an-array-of-0s-1s-and-2s/0",
        "solution":"https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/"
      },
      {
        "title":"Inversion of array",
        "practice":"https://practice.geeksforgeeks.org/problems/inversion-of-array/0",
        "solution":"https://www.geeksforgeeks.org/counting-inversions/"
      },
      {
        "title":"Kadane's Algorithm",
        "practice":"https://www.geeksforgeeks.org/find-the-missing-number/",
        "solution":"https://www.geeksforgeeks.org/find-the-missing-number/"
      },
      {
        "title":"Stock buy and sell",
        "practice":"https://practice.geeksforgeeks.org/problems/kadanes-algorithm/0",
        "solution":"https://www.geeksforgeeks.org/largest-sum-contiguous-subarray/"
      },
      {
        "title":"Kth smallest element",
        "practice":"https://practice.geeksforgeeks.org/problems/kth-smallest-element/0",
        "solution":"https://www.geeksforgeeks.org/kth-smallestlargest-element-unsorted-array/"
      },
      {
        "title":"Number of pairs",
        "practice":"https://practice.geeksforgeeks.org/problems/number-of-pairs/0",
        "solution":"https://www.geeksforgeeks.org/find-number-pairs-xy-yx/"
      },
      {
        "title":"Minimum Platforms",
        "practice":"https://practice.geeksforgeeks.org/problems/minimum-platforms/0",
        "solution":"https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/"
      },
      {
        "title":"Trapping Rain Water",
        "practice":"https://practice.geeksforgeeks.org/problem-page.php?pid=281",
        "solution":"https://www.geeksforgeeks.org/trapping-rain-water/"
      },
      {
        "title":"Boolean Matrix Problem",
        "practice":"https://practice.geeksforgeeks.org/problems/boolean-matrix-problem/0",
        "solution":"https://www.geeksforgeeks.org/a-boolean-matrix-question/"
      },
      {
        "title":"Merge Without Extra Space",
        "practice":"https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays/0",
        "solution":"https://www.geeksforgeeks.org/merge-two-sorted-arrays-o1-extra-space/"
      },
      {
        "title":"Binary Search",
        "practice":"https://practice.geeksforgeeks.org/problems/who-will-win/0",
        "solution":"https://www.geeksforgeeks.org/binary-search/"
      },
    )
  }

}
