// Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

function mergeArrays(arr1, arr2) {
    let newArr = [];
    let idx1 = 0;
    let idx2 = 0;
  
    while (idx1 < arr1.length || idx2 < arr2.length) {
      if (arr1[idx1] < arr2[idx2] || !arr2[idx2]) {
        newArr.push(arr1[idx1]);
        idx1++;
      } else if (arr2[idx2] < arr1[idx1] || !arr1[idx1]) {
        newArr.push(arr2[idx2]);
        idx2++;
      } else {
        newArr.push(arr1[idx1]);
        newArr.push(arr2[idx2]);
        idx1++;
        idx2++;
      }
    }
  
    return newArr;
}
  
mergeArrays([1,1,1,1,1], [2,3,5,8,9,10])
// look at the first items in array 1 and array 2
// if item from array 1 is smaller OR item in array 2 doesn't exist,
    // push item to new array, and then look at the NEXT item from array 1
// if item from array 2 is smaller OR item in array 1 doesn't exist,
    // push item to new array, and then look at the NEXT item from array 2
// if items ar equal, push both to new array and look at next item for both

// output: [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]