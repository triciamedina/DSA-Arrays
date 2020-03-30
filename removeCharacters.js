// Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'

function removeCharacters(str, charString) {
    const counter = {};
    const temp = [];
  
    for (let i = 0; i < charString.length; i++) {
      const char = charString[i];
      counter[char] = (counter[char] || 0) + 1;
    }
  
    for (let j = 0; j < str.length; j++) {
      const char = str[j]
      if (!counter[char]) {
        temp.push(str[j])
      }
    }
  
    str='';
  
    for (let k = 0; k < temp.length; k++) {
      str += temp[k];
    }
  
    return str;
}
  
removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')