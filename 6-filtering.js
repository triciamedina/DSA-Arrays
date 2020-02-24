// Imagine you have an array of numbers. 
// Write an algorithm to remove all numbers less than 5 from the array. 
// DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

const filterArray = function(array) {
    let newArray =[];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 5) {
            newArray.push(array[i])
        }
    }
    return newArray
}

const array = [1, 4, 10, 6, 3, 5, 2, 8]
console.log(filterArray(array))