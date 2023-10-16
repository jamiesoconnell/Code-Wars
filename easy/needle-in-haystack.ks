// looking for the first occurance of 'needle' in 'haystack'. needle = str. no$ no #.
// return the element number
//  needle = 'bay'  haystack = 'I love baywatch circa nineteen nineties'

function needleInHaystack(needle, haystack){
  let answer = haystack.indexOf(needle)
  console.log(answer)
}

needleInHaystack('bay', 'I love baywatch circa nineteen nineties')