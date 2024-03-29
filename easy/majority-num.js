// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.



// Example 1:
// Input: nums = [3,2,3]
// Output: 3


// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


function majority (arr){
    let obj = {}
    let result = 0
    for (let i = 0; i<arr.length; i++){
      let num = arr[i]
        if(!obj[num]){
          obj[num] = 1
          
        }else{
          obj[num]++
          if (obj[num]>result){
            result = num
          }
        }
      
    }
  
    
   return result
  }
  
  
  console.log(majority([3,2,3]), 3)
  console.log(majority([2,2,1,1,1,2,2]), 2)