// Compare the proposals with the following function:

// function commonGround(s1, s2)
// The parameters s1 and s2 are the strings representing what each of the generals said. You should output a string containing the words in s1 that also occur in s2.

// Each word in the resulting string shall occur once, and the order of the words need to follow the order of the first occurence of each word in s2.

// If they are saying nothing in common, kill both samurai and blame a ninja. (output "death")

function commonGround(s1, s2) {
    let newStr = [];
    let arr1 = s1.split(" ");
    let arr2 = s2.split(" ");
  
    for (let word of arr2) {
      if (arr1.includes(word) && !newStr.includes(word)) {
        newStr.push(word);
      }
    }
  
    return newStr.length > 0 ? newStr.join(" ") : "death";
  }
  