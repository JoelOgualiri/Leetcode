/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    const hashmap = {};
    for (let i = 0; i < nums.length; i++){
        if (target - nums[i] in hashmap) return [i, hashmap[target-nums[i]]]
        hashmap[nums[i]] = i
    }
};