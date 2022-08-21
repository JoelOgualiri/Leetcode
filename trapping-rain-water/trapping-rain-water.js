/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const leftMax = new Array(height.length).fill(0);
    const rightMax = new Array(height.length).fill(0);
    const minSeen = []
    let Sum = 0
    
    for (let i = 1; i < height.length; i++){
        leftMax[i] = Math.max(leftMax[i-1], height[i-1])

    }
    for (let i = rightMax.length-2; i >= 0; i--){
        rightMax[i] = Math.max(rightMax[i+1], height[i+1])
    }
    
    for (let i = 0; i < height.length; i++){
        minSeen[i] = Math.min(leftMax[i], rightMax[i])
    }
    
    for (let i = 0; i < height.length; i++){
        let currSum = minSeen[i] - height[i]
        Sum = Sum + (currSum < 0? 0:currSum)
    }
    
    return Sum
    
};