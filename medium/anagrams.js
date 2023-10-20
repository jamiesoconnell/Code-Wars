//arr - str. anagrams. no #s. yes-empty. 

//arr [ [], [ ,]]

//["eat","tea","tan","ate","nat","bat"] --> Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

//loop. compare letters. 

  

function anagrams(arr){
    let obj = {}
    for (str of arr){
      let letters = str.split('').sort().join('')
      if (obj[letters]){
        obj[letters].push(str)
      }
      else{
        obj[letters] = [str]
      }
    } 

    console.log(Object.values(obj))
  }


anagrams(["eat","tea","tan","ate","nat","bat"])