// 9. Palindrome Number
// Easy
// Topics
// Companies
// Hint
// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


// x= num , palindrome? 

// whole num? y. +ve #? n. !$? ? 

// 1234321 -> true
// 87678 -> true
// 928432 -> false

// function- num- convert to str - compare to original - t/f?

function isPalindrome(x){
    let str = x.toString().split('').reverse().join('')
    if(str === x.toString()){
      console.log('true')
    } else{
      console.log('false')
    }
    
  }
  
  isPalindrome(1234321) // true
  isPalindrome(87678) // true
  isPalindrome(928432) // false