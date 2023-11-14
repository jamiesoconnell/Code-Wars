// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.


function merge(num1, num2){

    let arr = num1.concat(num2)
    console.log(arr.sort( (a,b)=> a-b))
  }
  
  
  merge([1,2,3,0,0,0],[2,5,6])