// Write a function that receives two strings and returns n, where n is equal to the number of characters we should shift the first string forward to match the second. The check should be case sensitive.

// For instance, take the strings "fatigue" and "tiguefa". In this case, the first string has been rotated 5 characters forward to produce the second string, so 5 would be returned.

// If the second string isn't a valid rotation of the first string, the method returns -1.
// Examples:
// "coffee", "eecoff" => 2
// "eecoff", "coffee" => 4
// "moose", "Moose" => -1
// "isn't", "'tisn" => 2
// "Esham", "Esham" => 0
// "dog", "god" => -1

function shiftedDiff(first, second) {
    // Find the position of the first character of the first string in the second string.
    const position = second.indexOf(first[0]);
  
    if (position === -1) {
      return -1; // The first character is not in the second string, so it's not a valid rotation.
    }
  
    // Check if the substrings before and after the position match the first string.
    if (first === second.slice(position) + second.slice(0, position)) {
      return position;
    } else {
      return -1; // The strings don't match as a valid rotation.
    }
  }
  