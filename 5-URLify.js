// Write a method that takes in a string and replaces all its empty spaces with a %20. 
// Your algorithm can only make 1 pass through the string. 
// Examples of input and output for this problem can be

// Input: tauhida parveen

// Output: tauhida%20parveen

// Input: www.thinkful.com /tauh ida parv een

// Output: www.thinkful.com%20/tauh%20ida%20parv%20een

const replaceSpaces = function(string) {
    let newArr = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            newArr.push('%20') 
        } else {
            newArr.push(string[i])
        }
    };
    return newArr.join('');
}

const string = 'www.thinkful.com /tauh ida parv een'
console.log(replaceSpaces(string))