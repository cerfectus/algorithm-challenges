/*return an array of strings, each representing a line of the completed map.

cavityMap has the following parameter(s):

grid: an array of strings, each representing a row of the grid*/

function cavityMap(grid) {
    const twoDArr = grid.map(ele => ele.split(''));
       
       // Loop through 2D array checking values against neighbours
       for(let i = 1; i < twoDArr.length - 1; i++) {
           for(let j = 1; j < twoDArr[i].length - 1; j++) {
               if(horizontalCheck(twoDArr, i, j) && verticalCheck(twoDArr, i, j)) {
                 twoDArr[i][j] = 'X'; 
               }
           }
       }
       const newGrid = twoDArr.map(ele => ele.join(''));
       return newGrid;
   }
   
   // Check against horizontal values
   function horizontalCheck(arr, column, row) {
       if(arr[column][row] > arr[column][row - 1] && arr[column][row] > arr[column][row + 1]) {
           return true;
       } else {
           return false;
       }
   }
   
   // Check against vertical values
   function verticalCheck(arr, column, row) {
       if(arr[column][row] > arr[column - 1][row] && arr[column][row] > arr[column + 1][row]) {
           return true;
       } else {
           return false;
       }
   
   }