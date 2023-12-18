function usdcny(usd) {
    return (usd * 6.75)+ " Chinese Yuan"
  }


  //fixed code :
  
  function usdcny(usd) {
    // Calculate the Chinese Yuan
    let yuan = usd * 6.75;
  
    // Format the result with two decimal places
    let formattedYuan = yuan.toFixed(2);
  
    return formattedYuan + " Chinese Yuan";
  }