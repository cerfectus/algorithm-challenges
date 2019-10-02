//find the diagonal difference
function diagonalDifference(a) {
    let leftTotal = 0;
    let rightTotal = 0;
  
    for (i = 0, j = a.length - 1; a.length > i; i++, j--) {
      leftTotal += a[i][i];
      rightTotal += a[i][j];
    }
    return Math.abs(leftTotal - rightTotal);
  }
  diagonalDifference([[1,2,3],
   [4,5,6],
   [7,8,10]])