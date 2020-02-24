// Given an array of numbers, write an algorithm to find out 
// the products of every other number except the number at each index.

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

const products = function(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let tempArr = (arr.slice(0, i)).concat(arr.slice(i + 1));
        let total = 1;

        for (let j = 0; j < tempArr.length; j ++) {
            total *= tempArr[j];
        };

        newArr.push(total);
    };

    return newArr;
}

const arr = [1, 3, 9, 4];
console.log(products(arr))