// Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

function search2D(arr) {
    const foundRow = {};
    const foundIdx = {};
  
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++){
            if (arr[i][j] === 0) {
                foundRow[i] = (foundRow[i] || 0) + 1;
                foundIdx[j] = (foundIdx[j] || 0) + 1;
            }
        }
    }
  
    for (let k = 0; k < arr.length; k++) {
      for (let l = 0; l < arr[k].length; l++) {
            if (foundRow[k] || foundIdx[l]) {
            arr[k][l] = 0;
            }
        }
    }
  
    return arr;
}
  
search2D([[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]]);

// Output:
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];