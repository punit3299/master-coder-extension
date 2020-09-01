import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trees',
  templateUrl: './trees.component.html',
  styleUrls: ['./trees.component.css']
})
export class TreesComponent implements OnInit {

  trees=[];

  constructor() { }

  ngOnInit() {

    this.trees.push(
      {
        "title":"Height of Binary Tree",
        "practice":"https://practice.geeksforgeeks.org/problems/height-of-binary-tree/1",
        "solution":"https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/"
      },
      {
        "title":"Count Leaves in Binary Tree",
        "practice":"https://practice.geeksforgeeks.org/problems/count-leaves-in-binary-tree/1",
        "solution":"https://www.geeksforgeeks.org/write-a-c-program-to-get-count-of-leaf-nodes-in-a-binary-tree/"
      },
      {
        "title":"Lowest Common Ancestor in a BST",
        "practice":"https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-bst/1",
        "solution":"https://www.geeksforgeeks.org/lowest-common-ancestor-in-a-binary-search-tree/"
      },
      {
        "title":"Determine if Two Trees are Identical",
        "practice":"https://practice.geeksforgeeks.org/problems/determine-if-two-trees-are-identical/1",
        "solution":"https://www.geeksforgeeks.org/write-c-code-to-determine-if-two-trees-are-identical/"
      },
      {
        "title":"Diameter of Binary Tree",
        "practice":"https://practice.geeksforgeeks.org/problems/diameter-of-binary-tree/1",
        "solution":"https://www.geeksforgeeks.org/diameter-of-a-binary-tree/"
      },
      {
        "title":"Mirror Tree",
        "practice":"https://practice.geeksforgeeks.org/problems/mirror-tree/1",
        "solution":"https://www.geeksforgeeks.org/check-if-two-trees-are-mirror/"
      },
      {
        "title":"Left View of Binary Tree",
        "practice":"https://practice.geeksforgeeks.org/problems/left-view-of-binary-tree/1",
        "solution":"https://www.geeksforgeeks.org/print-left-view-binary-tree/"
      },
      {
        "title":"Maximum Path Sum between 2 Leaf Nodes",
        "practice":"https://practice.geeksforgeeks.org/problems/maximum-path-sum/1",
        "solution":"https://www.geeksforgeeks.org/find-maximum-path-sum-two-leaves-binary-tree/"
      },
      {
        "title":"Check for Balanced Tree",
        "practice":"https://practice.geeksforgeeks.org/problems/check-for-balanced-tree/1",
        "solution":"https://www.geeksforgeeks.org/how-to-determine-if-a-binary-tree-is-balanced/"
      },
      {
        "title":"Lowest Common Ancestor in a Binary Tree",
        "practice":"https://practice.geeksforgeeks.org/problems/lowest-common-ancestor-in-a-binary-tree/1",
        "solution":"https://www.geeksforgeeks.org/lowest-common-ancestor-binary-tree-set-1/"
      },
      {
        "title":"Level order traversal in spiral form",
        "practice":"https://practice.geeksforgeeks.org/problems/level-order-traversal-in-spiral-form/1",
        "solution":"https://www.geeksforgeeks.org/level-order-traversal-in-spiral-form/"
      },
      {
        "title":"Vertical Traversal of Binary Tree",
        "practice":"https://practice.geeksforgeeks.org/problems/print-a-binary-tree-in-vertical-order/1",
        "solution":"https://www.geeksforgeeks.org/print-binary-tree-vertical-order/"
      },
      {
        "title":"Bottom View of Binary Tree",
        "practice":"https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",
        "solution":"https://www.geeksforgeeks.org/bottom-view-binary-tree/"
      },
      {
        "title":"Check for BST",
        "practice":"https://practice.geeksforgeeks.org/problems/check-for-bst/1",
        "solution":"https://www.geeksforgeeks.org/a-program-to-check-if-a-binary-tree-is-bst-or-not/"
      },
      {
        "title":"Serialize and Deserialize a Binary Tree",
        "practice":"https://practice.geeksforgeeks.org/problems/serialize-and-deserialize-a-binary-tree/1",
        "solution":"https://www.geeksforgeeks.org/serialize-deserialize-binary-tree/"
      },
      {
        "title":"Binary Tree to DLL",
        "practice":"https://practice.geeksforgeeks.org/problems/binary-tree-to-dll/1",
        "solution":"https://www.geeksforgeeks.org/convert-given-binary-tree-doubly-linked-list-set-3/"
      },
      {
        "title":"Fixing Two nodes of a BST",
        "practice":"https://practice.geeksforgeeks.org/problems/fixed-two-nodes-of-a-bst/1",
        "solution":"https://www.geeksforgeeks.org/fix-two-swapped-nodes-of-bst/"
      }
    )
  }

}
