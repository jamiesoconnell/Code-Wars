// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]

function scrollingText(text) {
    let answer = [];
    
    for (let i = 0; i <= text.length-1; i++) {
      let rotatedText = text.slice(i).toUpperCase() + text.slice(0, i).toUpperCase();
      answer.push(rotatedText);
    }
  
    return answer;
  }