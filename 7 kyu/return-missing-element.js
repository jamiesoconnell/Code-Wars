function getMissingElement(array) {
    const sortedArray = array.slice().sort((a, b) => a - b);
  
    for (let i = 0; i < sortedArray.length; i++) {
      let num = sortedArray[i];
      if (num + 1 !== sortedArray[i + 1]) {
        return num + 1;
      }
    }
  }
  
  console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));
  