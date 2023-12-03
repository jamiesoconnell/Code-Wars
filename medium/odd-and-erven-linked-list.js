function oddAndEven(arr){
    let arr1 =[]
    let arr2 = []
    for (let i = 0; i<arr.length; i++){
      let num = arr[i]
      if(num % 2 == 0){
        arr1.push(num)
      }else{
        arr2.push(num)
      }
    }
    return arr2.concat(arr1) 
  }
  
  
  console.log(oddAndEven([1,2,3,4,5]))