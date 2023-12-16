function take(arr, n) {
    let answer = []
    for (let i = 0; i<n; i++){
      answer.push(arr[i])
    }
    return answer
  }


//corrected code:

function take(arr, n) {
    let answer = [];
    if (arr.length === 0) {
      return [];
    } else {
      for (let i = 0; i < Math.min(n, arr.length); i++) {
        answer.push(arr[i]);
      }
    }
    return answer;
  }