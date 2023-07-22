// We have a big list having values fom 1 to n, occurring only once but unordered with an unknown amount of missing values. The number n will be considered the maximum value of the array.

// We have to output the missing numbers sorted by value. Example:

// [8, 10, 11, 7, 3, 15, 6, 1, 14, 5, 12]  ---> [2, 4, 9, 13]
// The number 1 should be in the input array, if it's not present in the input array, should be included in the results. See the example below.

// [8, 10, 11, 7, 3, 15, 6, 14, 5, 12]  ---> [1, 2, 4, 9, 13]
// As this is a hardcore version, the tests are prepared for only algorithms of time complexityO(n) to pass. As the speed of each language are different, we will have different maximum lengths for the input.

// Features of the random tests:   
// 1000 <= length of arrays <= 30.000.000
// 1 <= amount of missing  numbers <= 10  
// amount of tests: 20

function missNumsFinder(arr) {
    let missingNum = [];
    arr = arr.sort((a, b) => a - b);
  
    let firstNum = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
      let currentPos = arr[i];
      let nextPos = arr[i + 1];
      let difference = nextPos - currentPos;
  
      if (difference > 1) {
        for (let j = 1; j < difference; j++) {
          missingNum.push(currentPos + j);
        }
      }
    }
  
    // Check if the number '1' is missing from the beginning
    if (firstNum > 1) {
      for (let num = 1; num < firstNum; num++) {
        missingNum.push(num);
      }
    }
  
    return missingNum;
  }