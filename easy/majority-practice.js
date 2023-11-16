// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// P- numbers. +ve. no empty. no%$. 
// R- return the number - majority
// E-  [8,6,7,3,8,3,5,4,8,8,2,3,2] --> 8
// P- loop through. save occurances in an object. pick out the highest

function majority (arr){
    let obj = {}
  
    for (let i = 0; i<arr.length; i++){
      let num = arr[i]
      if(obj[num]){
        obj[num] ++
      }else{
        obj[num] = 1
      }
    }
  
    let maxCount = 0
    let number
  
    for (let key in obj){
      if (obj[key]> maxCount){
        maxCount = obj[key]
        number = key
      }
    }
  
    console.log(number)
  }
  
  majority([8,6,7,3,8,3,5,4,8,8,2,3,2])
  majority([8,6,7,3,8,3,5,4,8,8,2,3,2,4,4,4,4,4])