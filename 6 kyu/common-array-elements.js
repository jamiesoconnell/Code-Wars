// Given three arrays of integers, return the sum of elements that are common in all three arrays.

// For example:

// common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
// common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are comm

function common(a,b,c){
    let holder = []
   let commonElements = []
   
    for (let i = 0; i<b.length; i++){
      if(b.includes(a[i])){
        holder.push(a[i])
      }
    }
    for (let j = 0; j< c.length; j++){
      if(c.includes(holder[j])){
        commonElements.push(holder[j])
      }
    }
    return commonElements.reduce((x,y)=>x+y)
  }