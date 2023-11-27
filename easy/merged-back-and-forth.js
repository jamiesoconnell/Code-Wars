function combine(arr1, arr2) {
    let finalArr = [];
    let maxLength = Math.max(arr1.length, arr2.length);
  
    for (let i = 0; i < maxLength; i++) {
      if (i < arr1.length) {
        finalArr.push(arr1[i]);
      }
      if (i < arr2.length) {
        finalArr.push(arr2[i]);
      }
    }
  
    return finalArr;
  }
  
  console.log(combine(["a", "b", "c", "d", "e", "f", "g"], [1, 2, 3, 4, 5]));
  