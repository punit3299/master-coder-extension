import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-linked-list',
  templateUrl: './linked-list.component.html',
  styleUrls: ['./linked-list.component.css']
})
export class LinkedListComponent implements OnInit {

  linkedList=[];

  constructor() { }

  ngOnInit() {

    this.linkedList.push(
      {
        "title":"Finding middle element in a linked list",
        "practice":"https://practice.geeksforgeeks.org/problems/finding-middle-element-in-a-linked-list/1",
        "solution":"https://www.geeksforgeeks.org/write-a-c-function-to-print-the-middle-of-the-linked-list/"
      },
      {
        "title":"Nth node from end of linked list",
        "practice":"https://practice.geeksforgeeks.org/problems/nth-node-from-end-of-linked-list/1",
        "solution":"https://www.geeksforgeeks.org/nth-node-from-the-end-of-a-linked-list/"
      },
      {
        "title":"Rotate a Linked List",
        "practice":"https://practice.geeksforgeeks.org/problems/rotate-a-linked-list/1",
        "solution":"https://www.geeksforgeeks.org/rotate-a-linked-list/"
      },
      {
        "title":"Reverse a linked list",
        "practice":"https://practice.geeksforgeeks.org/problems/reverse-a-linked-list/1",
        "solution":"https://www.geeksforgeeks.org/reverse-a-linked-list/"
      },
      {
        "title":"Reverse a Linked List in groups of given size",
        "practice":"https://practice.geeksforgeeks.org/problems/reverse-a-linked-list-in-groups-of-given-size/1",
        "solution":"https://www.geeksforgeeks.org/reverse-a-list-in-groups-of-given-size/"
      },
      {
        "title":"Check if Linked List is Palindrome",
        "practice":"https://practice.geeksforgeeks.org/problems/check-if-linked-list-is-pallindrome/1",
        "solution":"https://www.geeksforgeeks.org/function-to-check-if-a-singly-linked-list-is-palindrome/"
      },
      {
        "title":"Detect Loop in linked list",
        "practice":"https://practice.geeksforgeeks.org/problems/detect-loop-in-linked-list/1",
        "solution":"https://www.geeksforgeeks.org/detect-loop-in-a-linked-list/"
      },
      {
        "title":"Remove loop in Linked List",
        "practice":"https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1",
        "solution":"https://www.geeksforgeeks.org/detect-and-remove-loop-in-a-linked-list/"
      },
      {
        "title":"Intersection Point in Y Shapped Linked Lists",
        "practice":"https://practice.geeksforgeeks.org/problems/intersection-point-in-y-shapped-linked-lists/1",
        "solution":"https://www.geeksforgeeks.org/write-a-function-to-get-the-intersection-point-of-two-linked-lists/"
      },
      {
        "title":"Merge two sorted linked lists",
        "practice":"https://practice.geeksforgeeks.org/problems/merge-two-sorted-linked-lists/1",
        "solution":"https://www.geeksforgeeks.org/merge-two-sorted-linked-lists/"
      },
      {
        "title":"Given a linked list of 0s, 1s and 2s, sort it.",
        "practice":"https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1",
        "solution":"https://www.geeksforgeeks.org/sort-a-linked-list-of-0s-1s-or-2s/"
      },
      {
        "title":"Pairwise swap of nodes in LinkeList",
        "practice":"https://practice.geeksforgeeks.org/problems/pairwise-swap-elements-of-a-linked-list-by-swapping-data/1",
        "solution":"https://www.geeksforgeeks.org/pairwise-swap-elements-of-a-given-linked-list/"
      },
      {
        "title":"Add two numbers represented by linked lists",
        "practice":"https://practice.geeksforgeeks.org/problems/add-two-numbers-represented-by-linked-lists/1",
        "solution":"https://www.geeksforgeeks.org/add-two-numbers-represented-by-linked-lists/"
      },
      {
        "title":"Implement Queue using Linked List",
        "practice":"https://practice.geeksforgeeks.org/problems/implement-queue-using-linked-list/1",
        "solution":"https://www.geeksforgeeks.org/queue-linked-list-implementation/"
      },
      {
        "title":"Implement Stack using Linked List",
        "practice":"https://www.geeksforgeeks.org/implement-a-stack-using-singly-linked-list/",
        "solution":"https://www.geeksforgeeks.org/implement-a-stack-using-singly-linked-list/"
      },
      {
        "title":"Delete without head pointer",
        "practice":"https://practice.geeksforgeeks.org/problems/delete-without-head-pointer/1",
        "solution":"https://www.geeksforgeeks.org/delete-a-node-from-linked-list-without-head-pointer/"
      },
      {
        "title":"Flattening a Linked List",
        "practice":"https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1",
        "solution":"https://www.geeksforgeeks.org/flattening-a-linked-list/"
      }
    )
  }
}
