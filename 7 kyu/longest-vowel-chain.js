// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

// If you like substring Katas, please try:

// Non-even substrings

// Vowel-consonant lexicon

function solve(s) {
    let winningNumber = 0;
    let vowelCount = 0;
    let vowels = 'aeiou';
  
    for (let i = 0; i < s.length; i++) {
      // Check if the current character is a vowel
      if (vowels.includes(s[i])) {
        vowelCount += 1;
      } else {
        // If it's not a vowel, check if the current vowelCount is greater than the winningNumber
        if (vowelCount > winningNumber) {
          winningNumber = vowelCount;
        }
        // Reset vowelCount to 0
        vowelCount = 0;
      }
    }
  
    // Check one more time after the loop in case the longest sequence extends to the end of the string
    if (vowelCount > winningNumber) {
      winningNumber = vowelCount;
    }
  
    return winningNumber;
  }
  

  
