// A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
// For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
// The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
// Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.


function dominator(arr) {
    let count = {}; //empty opbject to store my number's count
    let maxCount = 0;
    let mostFrequentNumber;
  
    for (let i = 0; i < arr.length; i++) { //loop to run through the arr
      let num = arr[i];
      if (count[num]) { //check to see if num exists as a property in coutns
        count[num]++;  //if yes then we up it by one
      } else {
        count[num] = 1; //if not then we make one
      }
  
      if (count[num] > maxCount) {
        maxCount = count[num];
        mostFrequentNumber = num;  //check to see what the highest num is
      }
    }
  
    if (maxCount > arr.length / 2) {  //a different conditional to check if
      return mostFrequentNumber;   //the dominant is larger than half
    } else {
      return -1;
    }
  }