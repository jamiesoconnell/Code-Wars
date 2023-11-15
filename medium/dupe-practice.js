// Input: nums = [0,0,1,1,1,1,2,3,3]
// Output: 7, nums = [0,0,1,1,2,3,3,_,_]
// Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores)..






function removeDup(arr){
    let obj = {}
    let result = []
  
    for (let i=0; i<arr.length; i++){
      let num = arr[i]
  
      if(!obj[num]|| obj[num]<2){
        result.push(num)
        obj[num]= (obj[num]||0) +1
      }else {
        result.push('_')
      }
    }
    console.log(result)
  }
  
  
  
  
  removeDup([0,0,1,1,1,1,2,3,3,3,3,3,5,6,7,7,7])