// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
 
    let strings = []
    let nums = []
    for (let i = 0; i < x.length; i++){
      if(typeof x[i] === 'string'){
        strings.push(Number((x[i])))
      }
      else if(typeof x[i] === 'number'){
        nums.push(x[i])
      }
    }
    strings = strings.reduce ((a,b) => a +b)
    nums = nums.reduce((a,b)=> a +b)
    return nums - strings
  }
  
  