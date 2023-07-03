Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5

function sumDigits(number) {
    let str = Math.abs(number).toString(); 
    let sum = Array.from(str).reduce(function(acc, c) { 
      return acc + parseInt(c, 10); 
    }, 0); 
  
    return sum;
  }
  
  
  
  //make all the nu,=mbers in the string positive
  //make it a string
  