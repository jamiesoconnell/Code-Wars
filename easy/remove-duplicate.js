// arr- #s. sort in non decreasing order. keep the same order. -ve? no. no $#@. 

// return the arr without the duplicates

//  

function removeDuplicates(nums){
    if(nums.length === 0){
      return 0
    } 
      
    
  
    let uniqueIndex = 0
      
    for (let i = 1; i<nums.length; i++){
      if(nums[i] !== nums[uniqueIndex]){
        uniqueIndex++
        nums[uniqueIndex] = nums[i]
      }
    }
    console.log(uniqueIndex +1)
  
    
  }
  
  
  removeDuplicates([1,2,2,5,6,7,7,8,9,9])