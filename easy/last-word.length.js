//return the length of the last word. String. " fffff " 

//return a number 

// "Happy Halloween everyone" --> 8
// "I cant wait to go to the beach" --> 5

// seperate. isolate last word. find the length of last word

function lastWordLength(s){
    let arr = s.trim().split(' ')
  
    console.log(arr[arr.length-1].length)
  }
  
  lastWordLength("  I cant wait to go to the beach   ")