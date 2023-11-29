//

function moveZeros(arr){
    let answer = []
    let zeros = []
  
    for (let i = 0; i< arr.length; i++){
      let num = arr[i]
  
      if (num === 0){
        zeros.push(num)
      }else{
        answer.push(num)
      }
    }
    return answer + "," + zeros
  }
  
  console.log(moveZeros([1,2,3,4,0,5,0,6,7,0,8,0,0,9,10,0,11,0,0,]))