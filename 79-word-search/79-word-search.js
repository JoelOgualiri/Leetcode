/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let maxRow = board.length;
    let maxCol = board[0].length;

    
    for (let row = 0; row < maxRow; row++){
        for (let col = 0; col < maxCol; col++){
            if (dfs(i=0,row,col,board,word,maxRow,maxCol, visited = new Set())) return true
        }
    }
    
    return false
    
};

function dfs(i, row,col,board,word,maxRow,maxCol, visited){
    if (row < 0 || row >= maxRow || col < 0 || col >= maxCol) return false
    const pos = row + ',' + col;
    if ((visited.has(pos))) return false
    if (i === word.length) return false
    if (i === word.length-1 && board[row][col] === word[i]) return true
    if (board[row][col] !== word[i]) return false;

    visited.add(pos)
    
    
    const left = dfs(i+1, row,col-1,board,word,maxRow,maxCol, visited)
    const right = dfs(i+1, row,col+1,board,word,maxRow,maxCol, visited)
    const up = dfs(i+1, row-1,col,board,word,maxRow,maxCol, visited)
    const down = dfs(i+1, row+1,col,board,word,maxRow,maxCol, visited)
    
    visited.delete(pos);
    
    return left || right || up || down
    
}