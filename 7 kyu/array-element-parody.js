// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

// Examples:

// [1, -1, 2, -2, 3] => 3

// 3 has no matching negative appearance

// [-3, 1, 2, 3, -1, -4, -2] => -4

// -4 has no matching positive appearance

// [1, -1, 2, -2, 3, 3] => 3

// (the only-positive or only-negative integer may appear more than once)

// Good luck!

function solve(arr) {
  for (var i = 0; i < arr.length; i++)
    if (!arr.includes(-1 * arr[i])) return arr[i];
}

function solve(arr){
	let notPairNumbers = 0;
	let number = arr.reduce((total, num) => {
		if (num >= 0)
			notPairNumbers++
		else
			notPairNumbers--

		return total + num;
	}, 0)

	return number / Math.abs(notPairNumbers)
  //..
};