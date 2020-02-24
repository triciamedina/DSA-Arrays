const Array = require('./1-array')

function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push("tauhida")

    console.log(arr.get(0));
}

console.log(main())

// Print the 1st item in the array arr
// console.log(arr.get(0))

// Empty the array and add just 1 item: arr.push("tauhida");
// Printing the item added return NaN. I think it has to do
// with this.memory = new Float64Array(1024). When pushing values
// to it it expects floating point numbers only

// What is the purpose of the _resize() function in your Array class?
// _resize() function makes a copy of the array an moves it to the new pointer
// then increases the capacity