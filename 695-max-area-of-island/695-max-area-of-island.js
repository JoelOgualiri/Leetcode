/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const visited = new Set();
    let maxSize = 0;
    let maxRow = grid.length
    let maxCol = grid[0].length
    for (let row = 0; row < maxRow; row++){
        for (let col = 0; col < maxCol; col++){
            const currentSize = foundIsland(grid, row, col, maxRow, maxCol, visited);
            maxSize = Math.max(maxSize, currentSize)
        }
    }
    return maxSize;
};

function foundIsland(grid, row, col, maxRow, maxCol, visited){
    if (row < 0 || row >= maxRow || col < 0 || col >= maxCol) return 0;
    if (grid[row][col] === 0) return 0;
    const pos = row + ',' + col;
    if (visited.has(pos)) return 0
    visited.add(pos);
    
    const left = foundIsland(grid, row, col-1, maxRow, maxCol, visited);
    const right = foundIsland(grid, row, col+1, maxRow, maxCol, visited);
    const up = foundIsland(grid, row-1, col, maxRow, maxCol, visited);
    const down = foundIsland(grid, row+1, col, maxRow, maxCol, visited);

    return left + right + up + down + 1

};