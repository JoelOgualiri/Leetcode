/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(array) {
    array.sort((a,b)=>a[0]-b[0])
    const result = [array[0]]
    for (let i = 1; i<array.length; i++){
        let prev = result[result.length-1]
        if(prev[1] >= array[i][0]){
            prev[1] = Math.max(prev[1], array[i][1])
        }else{
            result.push(array[i])
        }
    }
    return result
};