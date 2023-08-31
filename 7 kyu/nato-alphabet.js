// Complete the function nato that takes a word in parameter and returns a string that spells the word using the NATO phonetic alphabet.

// There should be a space between each word in the returned string, and the first letter of each word should be capitalized.

// For those of you that don't want your fingers to bleed, this kata already has a dictionary typed out for you.

// Examples
// "hi"      -->  "Hotel India"
// "abc"     -->  "Alpha Bravo Charlie"
// "babble"  -->  "Bravo Alpha Bravo Bravo Lima Echo"
// "Banana"  -->  "Bravo Alpha November Alpha November Alpha"

function nato(word) {
    return word
      .toUpperCase() // Convert the word to uppercase to match the keys in LETTERS
      .split('')     // Split the word into individual letters
      .map(individual => LETTERS[individual]) // Map each letter to its NATO representation
      .join(' ');    // Join the NATO representations into a single string with spaces
  }