function sectSort(arr, start, length = arr.length) {
    let arr2 = arr.slice(0, start);
    let arr3 = arr.slice(start, start + length).sort((a, b) => a - b);
    let arr4 = arr.slice(start + length);
    return arr2.concat(arr3, arr4);
  }
  
  