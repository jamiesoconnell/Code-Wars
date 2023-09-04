// You are given three integer inputs: length, minimum, and maximum.

// Return a string that:

// Starts at minimum
// Ascends one at a time until reaching the maximum, then
// Descends one at a time until reaching the minimum
// repeat until the string is the appropriate length
// Examples:

//  length: 5, minimum: 1, maximum: 3   ==>  "12321"
//  length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
//  length: 11, minimum: 5, maximum: 9  ==>  "56789876567"
// Notes:

// length will always be non-negative
// negative numbers can appear for minimum and maximum values

function ascendDescend(length, minimum, maximum) {
    let result = ''
    for (let i = minimum; i <= maximum; i++) {
      result += i
    }
    for (let i = maximum - 1; i > minimum; i--) {
      result += i
    }
    result = result.repeat(length)
    return result.substring(0,length)  
  }