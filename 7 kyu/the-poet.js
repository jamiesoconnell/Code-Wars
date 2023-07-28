// Scenario
// the rhythm of beautiful musical notes is drawing a Pendulum

// Beautiful musical notes are the Numbers

// Task
// Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum

// The Smallest element of the list of integers , must come in center position of array/list.

// The Higher than smallest , goes to the right .
// The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.

function pendulum(values) {
    values.sort((a, b) => a - b); // Sort the array in ascending order
  
    const result = [];
    let left = true;
  
    // Loop to fill the result array in a "to-and-fro" manner
    for (let i = 0; i < values.length; i++) {
      if (left) {
        result.unshift(values[i]);
      } else {
        result.push(values[i]);
      }
      left = !left; // Switch the direction
    }
  
    return result;
  }
  