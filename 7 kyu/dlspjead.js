// Being a bald man myself, I know the feeling of needing to keep it clean shaven. Nothing worse that a stray hair waving in the wind.

// You will be given a string(x). Clean shaved head is shown as "-" and stray hairs are shown as "/". Your task is to check the head for stray hairs and get rid of them.

// You should return the original string, but with any stray hairs removed. Keep count ot them though, as there is a second element you need to return:

// 0 hairs --> "Clean!"
// 1 hair --> "Unicorn!"
// 2 hairs --> "Homer!"
// 3-5 hairs --> "Careless!"
// >5 hairs --> "Hobo!"

// So for this head: "------/------" you shoud return:

// ["-------------", "Unicorn"]

function bald(x){
    let hairCount = 0
    
    x = x.replace(/\//g, ()=>{
      hairCount++
      return '-'
    })
  
    let response;
    if (hairCount === 0) {
      response = "Clean!";
    } else if (hairCount === 1) {
      response = "Unicorn!";
    } else if (hairCount === 2) {
      response = "Homer!";
    } else if (hairCount >= 3 && hairCount <= 5) {
      response = "Careless!";
    } else {
      response = "Hobo!";
    }
    return [x,response]
  }