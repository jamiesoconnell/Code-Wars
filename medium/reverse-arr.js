// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing 


function reverse(arr){

    let answer = arr.split(' ').reverse().join(' ')
      console.log(answer)
    }
    
    reverse("the sky is blue")