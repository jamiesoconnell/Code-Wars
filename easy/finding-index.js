// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1


// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

function findingIndex(nums, target){
    let answer = nums.indexOf(target)
    console.log(answer)
  }
  
  let nums = [1,3,5,6] 
  let target = 5
  
  findingIndex(nums, target)