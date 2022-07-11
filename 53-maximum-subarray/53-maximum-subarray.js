/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentMax = 0
    let result = -Infinity;
    for (let i = 0; i < nums.length; i++){
        currentMax = currentMax + nums[i];
        if (currentMax < nums[i]){
            currentMax = nums[i]
        }
       result = Math.max(currentMax, result)
    }
    return result
}