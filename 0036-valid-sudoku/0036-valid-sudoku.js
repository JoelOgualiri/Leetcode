/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const hmRow = {}
    const hmCol = {}
    const subBox = {}
    for (let row = 0; row < 9; row++){
        for (let col = 0; col < 9; col++){
            const posVal = board[row][col]
            if (posVal === ".") continue
            if (hmRow[row]){
                if (hmRow[row].has(String(posVal))){
                    return false
                }else{
                  hmRow[row].add(posVal)
                }    
            }else{
                hmRow[row]  = new Set().add(posVal)
                
            }
            if (hmCol[col]){
                if (hmCol[col].has(String(posVal))){
                    return false
                }else{
                    hmCol[col].add(posVal)
                }
            }else{
                hmCol[col]  = new Set().add(posVal)
                
            }
            const sB = getSubBox(row,col)
            if (subBox[sB]){
                if (subBox[sB].has(String(posVal))){
                    return false
                }else{
                    subBox[sB].add(posVal)
                }
            }else{
                subBox[sB]  = new Set().add(posVal)       
            }
        }
    }
    return true
};

function getSubBox(row,col){
    if (col >= 0 && col < 3){
        if (row >= 0 && row < 3) return "A"
        if (row >= 3 && row < 6) return "B"
        if (row >=6 && row < 9) return "C"
    }else if (col >= 3 && col < 6){
        if (row >= 0 && row < 3) return "D"
        if (row >= 3 && row < 6) return "E"
        if (row >=6 && row < 9) return "F"
    }else{
        if (row >= 0 && row < 3) return "G"
        if (row >= 3 && row < 6) return "H"
        if (row >=6 && row < 9) return "I"
    }
}
