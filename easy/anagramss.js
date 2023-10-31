// 2 strings. no #@!. anagrams = same f and b
// t or f
// "racecar" "madam" "christmas"
// seperate the letters. reverse them. compare the 2. 

function anagrams(str){
    let reversed = str.split('').reverse().join('')
    if (reversed === str){
      return true
    }
    else{
      return false
    }
    
  }
  
  
   console.log(anagrams("racecar"))
  console.log(anagrams("madam"))
  console.log(anagrams("christmas"))