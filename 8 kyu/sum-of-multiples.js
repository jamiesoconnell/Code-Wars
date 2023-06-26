// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples
// Examples
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ...


function sumMul(n, m) {
    if (n >= m) {
      return 'INVALID';
    } else {
      let arr = [];
      for (let i = n; i < m; i++) {
        if (i % n === 0) {
          arr.push(i);
        }
      }
      return arr.reduce((acc, c) => acc + c, 0);
    }
  }
  
  
  //run a loop