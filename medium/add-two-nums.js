// 2. Add Two Numbers
// Medium
// Topics
// Companies
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]
//given two arr containting numbers. +ve. no !. whole #s.

// return the total # in arr

// [1,2,3,4] && [1,2,3,4] === [8,6,4,2]
//[2,4,6,8] && [1,2,3,4] === [1,2,9,6,3]

//1st make them into whole nubers. reverse them. add them. and then display in arr with ,

function sumTwoArr(l1, l2){
    let num1 = parseInt(l1.reverse().join(''))
    let num2 = parseInt(l2.reverse().join(''))
  
    let num3= num1 + num2
    const result = num3.toString().split('').map(Number)
    console.log(result)
  }
  
  
  
  const l1 = [2,4,6,8]
  const l2 = [1,2,3,4]
  sumTwoArr(l1,l2)