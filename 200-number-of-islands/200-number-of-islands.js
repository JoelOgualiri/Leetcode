/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const visited = new Set();
    
    let islandCount = 0;
    let maxRow = grid.length
    let maxCol = grid[0].length
    for (let row = 0; row < maxRow; row++){
        for (let col = 0; col < maxCol; col++){
            const bool = foundIsland(grid, row, col, maxRow, maxCol, visited);
            if (bool) islandCount++
        }
    }
    return islandCount;
};

function foundIsland(grid, row, col, maxRow, maxCol, visited){
    if (row < 0 || row >= maxRow || col < 0 || col >= maxCol) return false;
    if (grid[row][col] === '0') return false;
    const pos = row + ',' + col;
    if (visited.has(pos)) return false
    visited.add(pos);
    
    const left = foundIsland(grid, row, col-1, maxRow, maxCol, visited);
    const right = foundIsland(grid, row, col+1, maxRow, maxCol, visited);
    const up = foundIsland(grid, row-1, col, maxRow, maxCol, visited);
    const down = foundIsland(grid, row+1, col, maxRow, maxCol, visited);

    return true
}