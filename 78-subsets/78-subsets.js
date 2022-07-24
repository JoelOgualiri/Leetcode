/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (nums.length === 0) return [[]];
    
    const first = nums[0]
    const result = [];
    const subset = subsets(nums.slice(1))
    
    for (let item of subset){
        result.push([...item, first])
    }
    return [...subset, ...result]
};