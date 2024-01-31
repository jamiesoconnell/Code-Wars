// DESCRIPTION:
// Steps

// Square the numbers that are greater than zero.
// Multiply by 3 every third number.
// Multiply by -1 every fifth number.
// Return the sum of the sequence.
// Example
// { -2, -1, 0, 1, 2 } returns -6

// 1. { -2, -1, 0, 1 * 1, 2 * 2 }
// 2. { -2, -1, 0 * 3, 1, 4 }
// 3. { -2, -1, 0, 1, -1 * 4 }
// 4. -6

var calc = function(arr) {
    const result = arr
      .map(num => 
        num > 0 ? num * num : // Square the numbers that are greater than zero.
        (arr.indexOf(num) + 1) % 3 === 0 ? num * 3 : // Multiply by 3 every third number.
        (arr.indexOf(num) + 1) % 5 === 0 ? num * -1 : num // Multiply by -1 every fifth number.
      )
      .reduce((acc, curr) => acc + curr, 0); // Return the sum of the sequence.
  
    return result;
  }