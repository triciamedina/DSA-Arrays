// Imagine you have 2 arrays which have already been sorted. 
// Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

const mergeArrays = function(arr1, arr2) {
    let newArr = arr1.concat(arr2)
    return newArr.sort(function(a, b) {
        return a - b
    })
}

const arr1 = [1, 3, 6, 8, 11];
const arr2 = [2, 3, 5, 8, 9, 10];

console.log(mergeArrays(arr1, arr2))