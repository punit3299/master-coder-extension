import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.css']
})
export class StringComponent implements OnInit {

  string=[];

  constructor() { }

  ngOnInit() {

    this.string.push(
      {
        "title":"Anagram",
        "practice":"https://practice.geeksforgeeks.org/problems/anagram/0",
        "solution":"https://www.geeksforgeeks.org/check-whether-two-strings-are-anagram-of-each-other/"
      },
      {
        "title":"Reverse words in a given string",
        "practice":"https://practice.geeksforgeeks.org/problems/reverse-words-in-a-given-string/0",
        "solution":"https://www.geeksforgeeks.org/reverse-words-in-a-given-string/"
      },
      {
        "title":"Remove Duplicates",
        "practice":"https://practice.geeksforgeeks.org/problems/remove-duplicates/0",
        "solution":"https://www.geeksforgeeks.org/remove-duplicates-from-a-string-in-o1-extra-space/"
      },
      {
        "title":"Longest Distinct characters in string",
        "practice":"https://practice.geeksforgeeks.org/problems/longest-distinct-characters-in-string/0",
        "solution":"https://www.geeksforgeeks.org/length-of-the-longest-substring-without-repeating-characters/"
      },
      {
        "title":"Check if string is rotated by two places",
        "practice":"https://practice.geeksforgeeks.org/problems/check-if-string-is-rotated-by-two-places/0",
        "solution":"https://www.geeksforgeeks.org/check-string-can-obtained-rotating-another-string-2-places/"
      },
      {
        "title":"Roman Number to Integer",
        "practice":"https://practice.geeksforgeeks.org/problems/roman-number-to-integer/0",
        "solution":"https://www.geeksforgeeks.org/converting-roman-numerals-decimal-lying-1-3999/"
      },
      {
        "title":"Implement strstr",
        "practice":"https://practice.geeksforgeeks.org/problems/implement-strstr/1",
        "solution":"https://www.geeksforgeeks.org/check-string-substring-another/"
      },
      {
        "title":"Longest Common Prefix in an Array",
        "practice":"https://practice.geeksforgeeks.org/problems/longest-common-prefix-in-an-array/0",
        "solution":"https://www.geeksforgeeks.org/longest-common-prefix-using-word-by-word-matching/"
      },
      {
        "title":"Permutations of a given string",
        "practice":"https://practice.geeksforgeeks.org/problems/permutations-of-a-given-string/0",
        "solution":"https://www.geeksforgeeks.org/write-a-c-program-to-print-all-permutations-of-a-given-string/"
      },
      {
        "title":"Longest Palindrome in a String",
        "practice":"https://practice.geeksforgeeks.org/problems/longest-palindrome-in-a-string/0",
        "solution":"https://www.geeksforgeeks.org/longest-palindrome-substring-set-1/"
      },
      {
        "title":"Recursively remove all adjacent duplicates",
        "practice":"https://practice.geeksforgeeks.org/problems/recursively-remove-all-adjacent-duplicates/0",
        "solution":"https://www.geeksforgeeks.org/recursively-remove-adjacent-duplicates-given-string/"
      },
      {
        "title":"Form a palindrome",
        "practice":"https://practice.geeksforgeeks.org/problems/form-a-palindrome/0",
        "solution":"https://www.geeksforgeeks.org/minimum-insertions-to-form-a-palindrome-dp-28/"
      },
      {
        "title":"Longest Common Substring",
        "practice":"https://practice.geeksforgeeks.org/problems/longest-common-substring/0",
        "solution":"https://www.geeksforgeeks.org/longest-common-substring-dp-29/"
      }
    )
  }

}
