// DESCRIPTION:
// As part of this Kata, you need to find the length of the sequence in an array, between the first and the second occurrence of a specified number.

// For example, for a given array arr

// [0, -3, 7, 4, 0, 3, 7, 9]
// Finding length between two 7s like

// lengthOfSequence([0, -3, 7, 4, 0, 3, 7, 9], 7)
// would return 5.

var lengthOfSequence = function (arr, n) {
    let startingPoint = arr.indexOf(n);
    let stoppingPoint = -1;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            count++;
            if (count === 2) {
                stoppingPoint = i;
            }
        }
    }

    if (count !== 2) {
        return 0; // Less or more than two occurrences
    }

    return stoppingPoint - startingPoint + 1;
};