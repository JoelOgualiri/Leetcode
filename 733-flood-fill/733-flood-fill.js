/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
function floodFillHelper(image,sr,sc,color,validVal, visited){
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) return image
    const pos = sr + ',' + sc
    if (visited.has(pos)) return image
    if (image[sr][sc] !== validVal) return image
    if (image[sr][sc] === color) return image
    visited.add(pos)
    
    let left = floodFillHelper(image,sr,sc -1,color,validVal,visited)
    let right =floodFillHelper(image,sr,sc + 1,color,validVal,visited)
    let up = floodFillHelper(image,sr -1,sc,color,validVal,visited)
    let down =floodFillHelper(image,sr + 1,sc,color,validVal,visited)
    image[sr][sc] = color
    return image
}
var floodFill = function(image, sr, sc, color) {
    let validVal = image[sr][sc];
    let visited = new Set()
    return floodFillHelper(image,sr,sc,color, validVal, visited)
    
};