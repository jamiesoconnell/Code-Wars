// return the majority number. all positive. will always have one. no funny business

// return a number

// [1,2,3,4,3,4,3,5,6,7] ---> 3

//run a loop over the arr and take note of how many times each shows up = obj

function findMajority(nums) {
    let obj = {}
  
    for (let i =0; i<nums.length; i++){
      if(obj.hasOwnProperty(nums[i])){
        obj[nums[i]] ++
      } else{
        obj[nums[i]] = 1
      }
    }
    console.log(obj)
  
    let theWinner = null
    let counter = 0
    
    for (let num in obj){
      if (obj[num] > counter){
        theWinner = num
        counter = obj[num]
      }
    }
    console.log(theWinner)
  }
  