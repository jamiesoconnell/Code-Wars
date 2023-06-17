// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  
    let exes = 0
    let ohs = 0
    
    str = str.toLowerCase();
    
    for(let i = 0; i< str.length; i++){
      if (str[i]=== 'x'){
        exes += 1
      }
      else if (str[i]=== 'o'){
        ohs += 1
      }
    }
  
    return exes === ohs
     
}
//acount for case sensetivity
//make two counters that can be compared later

//run a loop checking the str elements for x and o. change the counters accordingly

//compare and return

function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }