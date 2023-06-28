// DESCRIPTION:
// Complete the function that takes a string of English-language text and returns the number of consonants in the string.

// Consonants are all letters used to write English excluding the vowels a, e, i, o, u.

function consonantCount(str) {
    let consonants = 0
    str = str.toLowerCase();
    
    //do a loop that says if not a vowel to add to con
    
    for (let i = 0; i<str.length; i++){
      if ( (str[i] !== 'a') && 
          (str[i] !== 'e') && 
          (str[i] !== 'i') && 
          (str[i] !== 'o') &&
          (str[i] !== 'u') &&   
          /^[a-z]$/i.test(str[i])) { //check is character is a letter
        consonants += 1
      }
    }
    return consonants
  }