// Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

// Example 1
// a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
// a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

// returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']


function sortArray(a1, a2) {
  let orderedArray = [];

  for (let i = 0; i < a1.length; i++) {
    let firstLetter1 = a1[i][0];

    for (let j = 0; j < a2.length; j++) {
      let firstLetter2 = a2[j][0];
      
      if (firstLetter1 === firstLetter2) {
        orderedArray.push(a2[j]);
      }
    }
  }
  
  return orderedArray;
}

>