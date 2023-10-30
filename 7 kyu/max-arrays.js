

// function solve (arr){
//   return arr.map(subsets => new Set(subsets).size).reduce((a,c) => a*c,1)
// }

const solve = arr => arr.reduce((a,c)=> a* new Set(c).size,1)




console. log(solve([[1,2], [4], [5,6]]),4)

console. log(solve([[1,2],[3,4], [5,6]]),8)

