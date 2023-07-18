// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

function insertDash(num) {
    let numArray = num.toString().split('');  //string and seperated.
    
    
      for (let i = 0; i<numArray.length; i++){
        if (numArray[i] % 2 !== 0 && numArray[i + 1] % 2 !== 0){
          numArray.splice(i + 1, 0,'-')
          i++
        }
      }
        if (numArray[numArray.length - 1] % 2 !== 0) {
      numArray.pop('-');
    }
    return numArray.join('')
  }
  
  