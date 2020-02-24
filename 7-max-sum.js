// You are given an array containing positive and negative integers. 
// Write an algorithm which will find the largest sum in a continuous sequence.

// Input: [4, 6, -3, 5, -2, 1]
// Output: 12

const maxSum = function(array) {
    let maxSum = 0;
    let newSum = 0;
    for (let i = 0; i < array.length; i++) {
        newSum += array[i]
        if (newSum > maxSum) {
            maxSum = newSum;
        };
    };
    return maxSum;
}

const array = [4, 6, -3, 5, -2, 1];
console.log(maxSum(array))