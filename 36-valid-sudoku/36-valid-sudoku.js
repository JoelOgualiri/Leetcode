/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
   const rows = {}
   const cols = {}
   const grids = {}
   
   for (let row = 0; row < 9; row++){
       for (let col = 0; col < 9; col++){
           if (board[row][col] === ".") continue
           const num = board[row][col]
           const grid = `${Math.floor(row/3)},${Math.floor(col/3)}`
           if (!(rows[row])){
               rows[row] = new Set()
           }
           if (!cols[col]){
               cols[col] = new Set()
           }
           if (!grids[grid]){
               grids[grid] = new Set();
           }
           
           if (rows[row].has(num) || cols[col].has(num) || grids[grid].has(num)) return false
           
           rows[row].add(num);
           cols[col].add(num);
           grids[grid].add(num)
       }
   }
    return true
};

