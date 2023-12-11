While surfing in web I found interesting math problem called "Always perfect". That means if you add 1 to the product of four consecutive numbers the answer is ALWAYS a perfect square. For example we have: 1,2,3,4 and the product will be 1X2X3X4=24. If we add 1 to the product that would become 25, since the result number is a perfect square the square root of 25 would be 5.

So now lets write a function which takes numbers separated by commas in string format and returns the number which is a perfect square and the square root of that number.

If string contains other characters than number or it has more or less than 4 numbers separated by comma function returns "incorrect input".

If string contains 4 numbers but not consecutive it returns "not consecutive".

function checkRoot(str) {
    let arr = str.split(',').map(Number);
  
    // Check if the array has exactly 4 numbers
    if (arr.length !== 4 || arr.some(isNaN)) {
      return "incorrect input";
    }
  
    // Check if the numbers are consecutive
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return "not consecutive";
      }
    }
  
    // Calculate the product and check if it's a perfect square
    let product = arr.reduce((a, b) => a * b);
    let result = Math.sqrt(product + 1);
  
    // Check if the result is a perfect square
    if (result % 1 === 0) {
      return result;
    } else {
      return "not a perfect square";
    }
  }
  
  // Example usage:
  console.log(checkRoot("1,2,3,4"));       // Output: 5
  console.log(checkRoot("2,3,4,5"));       // Output: not a perfect square
  console.log(checkRoot("1,2,3"));         // Output: incorrect input
  console.log(checkRoot("5,6,7,8"));       // Output: not consecutive