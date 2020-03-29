// Imagine you have an array of numbers. 
// Write an algorithm to remove all numbers less than 5 from the array. 
// DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

// NAIVE SOLUTION - O(n^2)

// function removeLessThan5(arr) {
//   const originalLength = arr.length; // 8
//   let count = 0; //6
//   while (count < originalLength) {
//     if (arr[0] < 5) {
//       arr.shift();
//     } else {
//       const val = arr[0];
//       arr.push(val)
//       arr.shift();
//     }
//     count++;
//     console.log(count, arr)
//   }
//   return arr;
// }

// BETTER SOLUTION - O(n)

function removeLessThan5(arr) {
    let startIdx = 0;//1//2
    let toRemove = 0;//4//5
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 5) {
        toRemove++;
      } else {
        arr[startIdx] = arr[i];
        startIdx++;
      }
    }
  
    while (toRemove > 0) {
      arr.pop();
      toRemove--;
    }
  
    return arr;
}
  
removeLessThan5([0, 1, 4, -3, 5, 10, 3, 15]) 