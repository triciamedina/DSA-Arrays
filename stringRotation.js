// Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

function isRotation(str1, str2) {
    if(str1.length !== str2.length) {
      return false;
    }
  
    let arr = [];
    for (let i = 0; i < str1.length; i++) {
      arr.push(str1[i]);
    }
  
    let count = 0;
    
    while (count < str1.length) {
      if(arr.join('') !== str2) {
        const item = arr.shift();
        arr.push(item);
        count++;
      } else {
        return true;
      }
    }
    return false;
}

isRotation('amazon', 'azonma');

// Input: amazon, azonma

// Output: False

// Input: amazon, zonama

// Output: true