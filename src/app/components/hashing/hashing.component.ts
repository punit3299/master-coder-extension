import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hashing',
  templateUrl: './hashing.component.html',
  styleUrls: ['./hashing.component.css']
})
export class HashingComponent implements OnInit {

  hashing=[];

  constructor() { }

  ngOnInit() {

    this.hashing.push(
      {
        "title":"Relative Sorting",
        "practice":"https://practice.geeksforgeeks.org/problems/relative-sorting/0",
        "solution":"https://www.geeksforgeeks.org/sort-array-according-order-defined-another-array/"
      },
      {
        "title":"Sorting Elements of an Array by Frequency",
        "practice":"https://practice.geeksforgeeks.org/problems/sorting-elements-of-an-array-by-frequency/0",
        "solution":"https://www.geeksforgeeks.org/sort-elements-by-frequency/"
      },
      {
        "title":"Largest subarray with 0 sum",
        "practice":"https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1",
        "solution":"https://www.geeksforgeeks.org/find-the-largest-subarray-with-0-sum/"
      },
      {
        "title":"Count distinct elements in every window",
        "practice":"https://practice.geeksforgeeks.org/problems/count-distinct-elements-in-every-window/1",
        "solution":"https://www.geeksforgeeks.org/count-distinct-elements-in-every-window-of-size-k/"
      },
      {
        "title":"Array Pair Sum Divisibility Problem",
        "practice":"https://practice.geeksforgeeks.org/problems/array-pair-sum-divisibility-problem/0",
        "solution":"https://www.geeksforgeeks.org/check-if-an-array-can-be-divided-into-pairs-whose-sum-is-divisible-by-k/"
      },
      {
        "title":"Longest consecutive subsequence",
        "practice":"https://practice.geeksforgeeks.org/problems/longest-consecutive-subsequence/0",
        "solution":"https://www.geeksforgeeks.org/longest-consecutive-subsequence/"
      },
     
      {
        "title":"Array Subset of another array",
        "practice":"https://practice.geeksforgeeks.org/problems/array-subset-of-another-array/0",
        "solution":"https://www.geeksforgeeks.org/find-whether-an-array-is-subset-of-another-array-set-1/"
      },
      {
        "title":"Find all pairs with a given sum",
        "practice":"https://practice.geeksforgeeks.org/problems/find-all-pairs-whose-sum-is-x/0",
        "solution":"https://www.geeksforgeeks.org/print-all-pairs-with-given-sum/"
      },
      {
        "title":"Find first repeated character",
        "practice":"https://practice.geeksforgeeks.org/problems/find-first-repeated-character/0",
        "solution":"https://www.geeksforgeeks.org/find-the-first-repeated-character-in-a-string/"
      },
      {
        "title":"Zero Sum Subarrays",
        "practice":"https://practice.geeksforgeeks.org/problems/zero-sum-subarrays/0",
        "solution":"https://www.geeksforgeeks.org/print-all-subarrays-with-0-sum/"
      },
      {
        "title":"Minimum indexed character",
        "practice":"https://practice.geeksforgeeks.org/problems/minimum-indexed-character/0",
        "solution":"https://www.geeksforgeeks.org/find-character-first-string-present-minimum-index-second-string/"
      },
      {
        "title":"Check if two arrays are equal or not",
        "practice":"https://practice.geeksforgeeks.org/problems/check-if-two-arrays-are-equal-or-not/0",
        "solution":"https://www.geeksforgeeks.org/check-if-two-arrays-are-equal-or-not/"
      },
      {
        "title":"Uncommon characters",
        "practice":"https://practice.geeksforgeeks.org/problems/uncommon-characters/0",
        "solution":"https://www.geeksforgeeks.org/find-uncommon-characters-two-strings/"
      },
      {
        "title":"First element to occur k times",
        "practice":"https://practice.geeksforgeeks.org/problems/first-element-to-occur-k-times/0",
        "solution":"https://www.geeksforgeeks.org/first-element-occurring-k-times-array/"
      },
      {
        "title":"Check if frequencies can be equal",
        "practice":"https://practice.geeksforgeeks.org/problems/check-frequencies/0",
        "solution":"https://www.geeksforgeeks.org/check-if-frequency-of-all-characters-can-become-same-by-one-removal/"
      }
    )

  }

} 
