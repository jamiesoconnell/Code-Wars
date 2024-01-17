// Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:

// 'mean' - in case mean value is larger than median value
// 'median' - in case median value is larger than mean value
// 'same' - in case both mean and median share the same value
// Reminder: Median

// Array will always be valid (odd-length >= 3)

function meanVsMedian(numbers) {
    let mean = numbers.reduce((a,b)=>a+b,0)/numbers.length
    let median = numbers[Math.floor(numbers.length / 2)];
    
    if(mean>median){
      return 'mean'
    }else if(mean<median){
      return 'median'
    }  if(mean==median){
      return 'same'
    }
  }
  