import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dp',
  templateUrl: './dp.component.html',
  styleUrls: ['./dp.component.css']
})
export class DpComponent implements OnInit {

  dp=[];

  constructor() { }

  ngOnInit() {

    this.dp.push(
      {
        "title":"0 - 1 Knapsack Problem",
        "practice":"https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem/0",
        "solution":"https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/"
      },
      {
        "title":"Minimum number of Coins",
        "practice":"https://practice.geeksforgeeks.org/problems/number-of-coins/0",
        "solution":"https://www.geeksforgeeks.org/find-minimum-number-of-coins-that-make-a-change/"
      },
      {
        "title":"Minimum number of jumps",
        "practice":"https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps/0",
        "solution":"https://www.geeksforgeeks.org/minimum-number-of-jumps-to-reach-end-of-a-given-array/"
      },
      {
        "title":"Shortest Common Supersequence",
        "practice":"https://practice.geeksforgeeks.org/problems/shortest-common-supersequence/0",
        "solution":"https://www.geeksforgeeks.org/shortest-common-supersequence/"
      },
      {
        "title":"Longest Increasing Subsequence",
        "practice":"https://practice.geeksforgeeks.org/problems/longest-increasing-subsequence/0",
        "solution":"https://www.geeksforgeeks.org/longest-increasing-subsequence-dp-3/"
      },
      {
        "title":"Longest Common Subsequence",
        "practice":"https://practice.geeksforgeeks.org/problems/longest-common-subsequence/0",
        "solution":"https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/"
      },
      {
        "title":"Maximum sum increasing subsequence",
        "practice":"https://practice.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence/0",
        "solution":"https://www.geeksforgeeks.org/maximum-sum-increasing-subsequence-dp-14/"
      },
      {
        "title":"Edit Distance",
        "practice":"https://practice.geeksforgeeks.org/problems/edit-distance/0",
        "solution":"https://www.geeksforgeeks.org/edit-distance-dp-5/"
      },
      {
        "title":"Coin Change",
        "practice":"https://practice.geeksforgeeks.org/problems/coin-change/0",
        "solution":"https://www.geeksforgeeks.org/coin-change-dp-7/"
      },
      {
        "title":"Subset Sum Problem",
        "practice":"https://practice.geeksforgeeks.org/problems/subset-sum-problem/0",
        "solution":"https://www.geeksforgeeks.org/subset-sum-problem-dp-25/"
      },
      {
        "title":"Egg Dropping Puzzle",
        "practice":"https://practice.geeksforgeeks.org/problems/egg-dropping-puzzle/0",
        "solution":"https://www.geeksforgeeks.org/egg-dropping-puzzle-dp-11/"
      },
      {
        "title":"Optimal Strategy For A Game",
        "practice":"https://practice.geeksforgeeks.org/problems/optimal-strategy-for-a-game/0",
        "solution":"https://www.geeksforgeeks.org/optimal-strategy-for-a-game-dp-31/"
      },
      {
        "title":"Count number of hops",
        "practice":"https://practice.geeksforgeeks.org/problems/count-number-of-hops/0",
        "solution":"https://www.geeksforgeeks.org/count-number-of-ways-to-cover-a-distance/"
      },
      {
        "title":"Path in Matrix",
        "practice":"https://practice.geeksforgeeks.org/problems/path-in-matrix/0",
        "solution":"https://www.geeksforgeeks.org/min-cost-path-dp-6/#:~:text=Given%20a%20cost%20matrix%20cost,to%20traverse%20through%20that%20cell.&text=The%20path%20is%20(0%2C%200,%3E%20(2%2C%202)."
      },
      {
        "title":"Maximize The Cut Segments",
        "practice":"https://practice.geeksforgeeks.org/problems/cutted-segments/0",
        "solution":"https://www.geeksforgeeks.org/cutting-a-rod-dp-13/"
      },
      {
        "title":"Longest Common Substring",
        "practice":"https://www.geeksforgeeks.org/find-the-missing-number/",
        "solution":"https://www.geeksforgeeks.org/find-the-missing-number/"
      },
      {
        "title":"Box Stacking",
        "practice":"https://practice.geeksforgeeks.org/problems/box-stacking/1",
        "solution":"https://www.geeksforgeeks.org/box-stacking-problem-dp-22/"
      },
      {
        "title":"Minimum sum partition",
        "practice":"https://practice.geeksforgeeks.org/problems/minimum-sum-partition/0",
        "solution":"https://www.geeksforgeeks.org/partition-a-set-into-two-subsets-such-that-the-difference-of-subset-sums-is-minimum/"
      }
    )
  }

}
