// You are given an array containing positive and negative integers. 
// Write an algorithm which will find the largest sum in a continuous sequence.

// Input: [4, 6, -3, 5, -2, 1]
// Output: 12

const maxSum = function(arr) {
    let maxSum = 0;
    let newSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
        newSum += arr[i];
  
        if (newSum > maxSum) {
            maxSum = newSum;
        };
    };
  
    newSum = 0;
  
    for (let j = arr.length -1; j >= 0; j--) {
        newSum += arr[j];
  
        if (newSum > maxSum) {
            maxSum = newSum;
        };
    }
    return maxSum;
}
  
// const array = [4, 6, -3, 5, -2, 1];
// [-2, 1, 4, 6, -3, 5]
console.log(maxSum([-3, -2, 4, 6, 5, 1]))