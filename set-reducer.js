// DESCRIPTION:
// Set Reducer
// Intro
// These arrays are too long! Let's reduce them!

// Description
// Write a function that takes in an array of integers from 0-9, and returns a new array:

// Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
// Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4
// Example

// [0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

// Your function should then repeat the process on the resulting array, and on the resulting array of that, until it returns a single integer:

// [0, 4, 6, 8, 8, 8, 5, 5, 7] =>  [1, 1, 1, 3, 2, 1] => [3, 1, 1, 1] => [1, 3] => [1, 1] => [2]

function setReducer(input) {
    if (input.length === 1) return input[0];
    
    const result = [];
    let current;
    for (let i = 0; i < input.length; i++) {
      if (current === input[i]) {
        result[result.length - 1] += 1;
        continue;
      }
      current = input[i];
      result.push(1);
      
    }
    return setReducer(result);
  }