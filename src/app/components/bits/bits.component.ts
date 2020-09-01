import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bits',
  templateUrl: './bits.component.html',
  styleUrls: ['./bits.component.css']
})
export class BitsComponent implements OnInit {

  bits=[];

  constructor() { }

  ngOnInit() {
    this.bits.push(
      {
        "title":"Find first set bit",
        "practice":"https://practice.geeksforgeeks.org/problems/find-first-set-bit/0",
        "solution":"https://www.geeksforgeeks.org/position-of-rightmost-set-bit/"
      },
      {
        "title":"Rightmost different bit",
        "practice":"https://practice.geeksforgeeks.org/problems/rightmost-different-bit/0",
        "solution":"https://www.geeksforgeeks.org/position-rightmost-different-bit/"
      },
      {
        "title":"Check whether K-th bit is set or not",
        "practice":"https://practice.geeksforgeeks.org/problems/check-whether-k-th-bit-is-set-or-not/0",
        "solution":"https://www.geeksforgeeks.org/check-whether-k-th-bit-set-not/"
      },
      {
        "title":"Power of 2",
        "practice":"https://practice.geeksforgeeks.org/problems/power-of-2/0",
        "solution":"https://www.geeksforgeeks.org/program-to-find-whether-a-no-is-power-of-two/"
      },
      {
        "title":"Set kth bit",
        "practice":"https://practice.geeksforgeeks.org/problems/set-kth-bit/0",
        "solution":"https://www.geeksforgeeks.org/set-k-th-bit-given-number/"
      },
      {
        "title":"Count total set bits",
        "practice":"https://practice.geeksforgeeks.org/problems/count-total-set-bits/0",
        "solution":"https://www.geeksforgeeks.org/count-total-set-bits-in-all-numbers-from-1-to-n/"
      },
      {
        "title":"Number is sparse or not",
        "practice":"https://practice.geeksforgeeks.org/problem-page.php?pid=501",
        "solution":"https://www.geeksforgeeks.org/check-if-a-given-number-is-sparse-or-not/"
      },
      {
        "title":"Bit Difference",
        "practice":"https://practice.geeksforgeeks.org/problems/find-sum-of-different-corresponding-bits-for-all-pairs/0",
        "solution":"https://www.geeksforgeeks.org/sum-of-bit-differences-among-all-pairs/#:~:text=Bit%20difference%20of%20a%20pair,bits%20differ%20in%20two%20numbers)."
      },
      {
        "title":"Swap all odd and even bits",
        "practice":"https://practice.geeksforgeeks.org/problems/swap-all-odd-and-even-bits/0",
        "solution":"https://www.geeksforgeeks.org/swap-all-odd-and-even-bits/"
      },
      {
        "title":"Maximum XOR subset",
        "practice":"https://practice.geeksforgeeks.org/problems/maximum-subset-xor/1",
        "solution":"https://www.geeksforgeeks.org/find-maximum-subset-xor-given-set/"
      },
      {
        "title":"Set kth bit",
        "practice":"https://practice.geeksforgeeks.org/problems/set-kth-bit/0",
        "solution":"https://www.geeksforgeeks.org/set-k-th-bit-given-number/"
      },
      {
        "title":"Longest Consecutive 1's",
        "practice":"https://practice.geeksforgeeks.org/problems/longest-consecutive-1s/0",
        "solution":"https://www.geeksforgeeks.org/length-longest-consecutive-1s-binary-representation/"
      },
      {
        "title":"Rotate Bits",
        "practice":"https://practice.geeksforgeeks.org/problems/rotate-bits/0",
        "solution":"https://www.geeksforgeeks.org/rotate-bits-of-an-integer/"
      }
    )

  }

}
