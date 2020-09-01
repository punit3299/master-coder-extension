import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  queue=[];

  constructor() { }

  ngOnInit() {

    this.queue.push(
      {
        "title":"Queue using two Stacks",
        "practice":"https://practice.geeksforgeeks.org/problems/queue-using-two-stacks/1",
        "solution":"https://www.geeksforgeeks.org/queue-using-stacks/"
      },
      {
        "title":"Stack using two queues",
        "practice":"https://practice.geeksforgeeks.org/problems/stack-using-two-queues/1",
        "solution":"https://www.geeksforgeeks.org/implement-stack-using-queue/"
      },
      {
        "title":"First non-repeating character in a stream",
        "practice":"https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream/0",
        "solution":"https://www.geeksforgeeks.org/find-first-non-repeating-character-stream-characters/"
      },
      {
        "title":"Maximum of all subarrays of size k",
        "practice":"https://practice.geeksforgeeks.org/problems/maximum-of-all-subarrays-of-size-k/0",
        "solution":"https://www.geeksforgeeks.org/sliding-window-maximum-maximum-of-all-subarrays-of-size-k/"
      },
      {
        "title":"Rotten Oranges",
        "practice":"https://practice.geeksforgeeks.org/problems/rotten-oranges/0",
        "solution":"https://www.geeksforgeeks.org/minimum-time-required-so-that-all-oranges-become-rotten/"
      },
      {
        "title":"Circular tour",
        "practice":"https://practice.geeksforgeeks.org/problems/circular-tour-1587115620/1",
        "solution":"https://www.geeksforgeeks.org/find-a-tour-that-visits-all-stations/"
      },
      {
        "title":"LRU Cache",
        "practice":"https://practice.geeksforgeeks.org/problems/lru-cache/1",
        "solution":"https://www.geeksforgeeks.org/lru-cache-implementation/"
      }
    )
  }

}
