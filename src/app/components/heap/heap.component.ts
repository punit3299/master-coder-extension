import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heap',
  templateUrl: './heap.component.html',
  styleUrls: ['./heap.component.css']
})
export class HeapComponent implements OnInit {

  heap=[];

  constructor() { }

  ngOnInit() {

    this.heap.push(
      {
        "title":"Heap Sort",
        "practice":"https://practice.geeksforgeeks.org/problems/heap-sort/1",
        "solution":"https://www.geeksforgeeks.org/heap-sort/"
      },
      {
        "title":"Binary Heap Operations",
        "practice":"https://practice.geeksforgeeks.org/problems/operations-on-binary-min-heap/1",
        "solution":"https://www.geeksforgeeks.org/heap-data-structure/"
      },
      {
        "title":"Rearrange characters",
        "practice":"https://practice.geeksforgeeks.org/problems/rearrange-characters/0",
        "solution":"https://www.geeksforgeeks.org/rearrange-characters-string-no-two-adjacent/"
      },
     
      {
        "title":"Find median in a stream",
        "practice":"https://practice.geeksforgeeks.org/problems/find-median-in-a-stream/0",
        "solution":"https://www.geeksforgeeks.org/median-of-stream-of-integers-running-integers/"
      },
      {
        "title":"Kth largest element in a stream",
        "practice":"https://practice.geeksforgeeks.org/problems/kth-largest-element-in-a-stream/0",
        "solution":"https://www.geeksforgeeks.org/kth-largest-element-in-a-stream/"
      },
      {
        "title":"Merge k Sorted Arrays",
        "practice":"https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1",
        "solution":"https://www.geeksforgeeks.org/merge-k-sorted-arrays/"
      },
      {
        "title":"Merge K sorted linked lists",
        "practice":"https://practice.geeksforgeeks.org/problems/merge-k-sorted-linked-lists/1",
        "solution":"https://www.geeksforgeeks.org/merge-k-sorted-linked-lists/"
      }
    )
  }
}
