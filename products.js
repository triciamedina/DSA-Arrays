// Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index.

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

function findProducts(numArray) {
    let totalProduct = 1;
    let products = [];
  
    for (let i = 0; i < numArray.length; i++) {
      totalProduct *= numArray[i];
    }
  
    for (let j = 0; j < numArray.length; j++) {
      const product = Math.floor(totalProduct / numArray[j]);
      products.push(product);
    }
  
    return products;
}
  
findProducts([1, 3, 9, 4]);