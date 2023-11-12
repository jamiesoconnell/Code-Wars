function capitalizeWords(str) {
    let words = str.split(' ');
  
    let capWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
    console.log(capWords.join(' '));
  }
  
  // Example usage:
  capitalizeWords("i hope you're able to figure this out");
  