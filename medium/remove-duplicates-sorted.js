// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]


function removeDuplicates(arr){
    let obj ={}
    let result = []
  
      for (let i =0; i<arr.length; i++){
        nums = arr[i]
  
        if (!obj[nums] || obj[nums]<2){
          result.push(nums)
          obj[nums] = (obj[nums] || 0) + 1
        }else{
          result.push('_')
        }
        
      }
    
    return result.sort()
    
  }
  
  console.log( removeDuplicates([1,1,1,2,2,3], "[1,1,2,2,3,_]"))  
  console.log( removeDuplicates([0,0,1,1,1,1,2,3,3],"[0,0,1,1,2,3,3,_,_]"))