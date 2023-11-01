// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

//run a loop looking at each character. conditional= if its new or repeated. 

function change(str){
    return str
      .toLowerCase() //ignore capitals
      .split('')
      .map(char=> {
          if(str.indexOf(char) === str.lastIndexOf(char)){
            return '('
          }else{
            return ')'
          }
        })
      .join('')
  }
  
  console.log(change("din"))
  console.log(change("recede"))
  console.log(change("Success"))
  console.log(change("(( @" ))
    

  
  // "din"      =>  "((("
  // "recede"   =>  "()()()"
  // "Success"  =>  ")())())"
  // "(( @"     =>  "))((" 