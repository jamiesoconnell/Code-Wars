// arr = numbers. all +ve. no $!. yes empty.

// return the array without the val

// input -> [0,1,2,2,3,0,4,2] --> [0,1,4,0,3]

// run a loop and check to see if each index is equal to val

var removeElement = function(nums, val) {
    let count = 0

    for (let i = 0; i<nums.length; i++){
        if(nums[i] !== val){
            nums[count++] = nums[i]
        }

    }
    return count
};