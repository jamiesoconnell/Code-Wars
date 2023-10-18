//merge two lists. lists= #s- no @!''ABC- 


//splice them together - order them. 

function mergeLists(list1 , list2){
    let answer = [...list1, ...list2]
    answer = answer.sort((a,b)=> a-b)
    console.log(answer)
  }
  
  
  
  mergeLists([1,2,4],[1,3,4])