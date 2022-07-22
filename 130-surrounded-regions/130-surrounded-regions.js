/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const maxRow = board.length;
    const maxCol = board[0].length;
    const visited = {}
    const visiting = new Set()

    
    while (true){
        let row = 0;
        let col = 0;
        while (col < maxCol){
            if (board[row][col] === "O"){
                getRegions(board,row,col,maxRow,maxCol, changeFrom = "O", changeTo = "T")
                
            }
            col++;
        }
        row = 0;
        col = col -1;
        while (row < maxRow){
            if (board[row][col] === "O"){
                getRegions(board,row,col,maxRow,maxCol, changeFrom = "O", changeTo = "T")
            }
            row++;
        }
        row = row -1;
        col = col;
        while (col >= 0){
            if (board[row][col] === "O"){
               getRegions(board, row,col,maxRow,maxCol, changeFrom = "O", changeTo = "T")
            }
            col--
        }
        row = row
        col = col+1;
        while (row >= 0){
            if (board[row][col] === "O"){
               getRegions(board, row,col,maxRow,maxCol,changeFrom = "O", changeTo = "T")
            }
            row--;
        }
        
        break;
    }
    for (let row = 0; row < maxRow; row++){
        for (let col = 0; col < maxCol; col++){
            if (board[row][col] === "T"){
                board[row][col] ="O";
            }
            else if (board[row][col] === "O"){
                board[row][col] ="X";
            }
        }
    }
    
    
    
    return board

    
};


function getRegions(board,row,col,maxRow,maxCol, changeFrom, changeTo){
    if (row < 0 || row >= maxRow || col < 0 || col >= maxCol) return board
    const pos = row + ',' + col
    
    if (board[row][col] === "X") return board
    if (board[row][col] === "T") return board
    

    board[row][col] = changeTo

    const up = getRegions(board, row -1,col,maxRow,maxCol,changeFrom, changeTo);
 
    const down = getRegions(board,row +1,col,maxRow,maxCol, changeFrom, changeTo);

    const left = getRegions(board,row,col-1,maxRow,maxCol, changeFrom, changeTo);

    const right = getRegions(board, row,col+1,maxRow,maxCol, changeFrom, changeTo);


    return board
    
    
}