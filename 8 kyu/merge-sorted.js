Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

function mergeArrays(a, b) {
    let arr = a.concat(b)
      return [ ...new Set(arr)].sort();
  }
  