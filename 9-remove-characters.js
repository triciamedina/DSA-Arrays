// Write an algorithm that deletes given characters from a string. 
// For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" 
// and the characters to be removed are "aeiou", the algorithm should transform 
// the original string to "Bttl f th Vwls: Hw vs. Grzny". 
// Do not use Javascript's filter, split, or join methods.

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'

const removeChars = function(string, chars) {
    newString = ''
    for (let i = 0; i < string.length; i++) {
        let letter = string[i]
        for (let j = 0; j < chars.length; j++) {
            if (string[i] === chars[j]) {
                letter =''
            }
        }
        newString += letter
    }
    return newString
}

string = 'Battle of the Vowels: Hawaii vs. Grozny'
chars = 'aeiou'
console.log(removeChars(string, chars))