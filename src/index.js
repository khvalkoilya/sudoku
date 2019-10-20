module.exports = function solveSudoku(matrix) {
function solve(data){
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] === 0) {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = k;
            if (solve(data)) {
              return true;
            }
            data[i][j] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}
function isValid(data, x, y, k) {
  for (let i = 0; i < 9; i++) {
    const m = 3 * Math.floor(x / 3) + Math.floor(i / 3);
    const n = 3 * Math.floor(y / 3) + (i % 3);
    if (data[x][i] == k || data[i][y] == k || data[m][n] == k) {
      return false;
    }
  }
  return true;
}
solve(matrix);
return matrix;
};

