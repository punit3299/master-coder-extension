import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greedy',
  templateUrl: './greedy.component.html',
  styleUrls: ['./greedy.component.css']
})
export class GreedyComponent implements OnInit {

  greedy=[];

  constructor() { }

  ngOnInit() {

    this.greedy.push(
      {
        "title":"N meetings in one room",
        "practice":"https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room/0",
        "solution":"https://www.geeksforgeeks.org/find-maximum-meetings-in-one-room/"
      },
      {
        "title":"Activity Selection",
        "practice":"https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room/0",
        "solution":"https://www.geeksforgeeks.org/activity-selection-problem-greedy-algo-1/"
      },
      {
        "title":"Geek collects the balls",
        "practice":"https://practice.geeksforgeeks.org/problems/geek-collects-the-balls/0",
        "solution":"https://www.geeksforgeeks.org/distributing-all-balls-without-repetition/"
      },
      {
        "title":"Shop in Candy Store",
        "practice":"https://practice.geeksforgeeks.org/problems/shop-in-candy-store/0",
        "solution":"https://www.geeksforgeeks.org/find-minimum-maximum-amount-buy-n-candies/"
      },
      {
        "title":"Huffman Decoding-1",
        "practice":"https://practice.geeksforgeeks.org/problems/huffman-encoding/0",
        "solution":"https://www.geeksforgeeks.org/huffman-coding-greedy-algo-3/"
      },
      {
        "title":"Minimize the sum of product",
        "practice":"https://www.geeksforgeeks.org/minimize-sum-product-two-arrays-permutations-allowed/",
        "solution":"https://practice.geeksforgeeks.org/problems/minimize-the-sum-of-product/0"
      },
      {
        "title":"Minimize the heights",
        "practice":"https://practice.geeksforgeeks.org/problems/minimize-the-heights/0",
        "solution":"https://www.geeksforgeeks.org/minimize-the-maximum-difference-between-the-heights/"
      },
      {
        "title":"Largest number possible",
        "practice":"https://practice.geeksforgeeks.org/problems/largest-number-with-given-sum/0",
        "solution":"https://www.geeksforgeeks.org/find-the-largest-number-with-given-number-of-digits-and-sum-of-digits/"
      },
      {
        "title":"Page Faults in LRU",
        "practice":"https://practice.geeksforgeeks.org/problems/page-faults-in-lru/0",
        "solution":"https://www.geeksforgeeks.org/program-for-least-recently-used-lru-page-replacement-algorithm/"
      },
      {
        "title":"Maximize Toys",
        "practice":"https://practice.geeksforgeeks.org/problems/maximize-toys/0",
        "solution":"https://www.geeksforgeeks.org/maximise-the-number-of-toys-that-can-be-purchased-with-amount-k/"
      },
      {
        "title":"Coin Piles",
        "practice":"https://practice.geeksforgeeks.org/problems/coin-piles/0",
        "solution":"https://www.geeksforgeeks.org/remove-minimum-coins-such-that-absolute-difference-between-any-two-piles-is-less-than-k/"
      }
    )
  }

}
