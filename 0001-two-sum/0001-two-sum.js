/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hm = {}
    for (let i = 0; i < nums.length; i++){
        if ((target-nums[i]) in hm) return [hm[target-nums[i]], i]
        hm[nums[i]] = i
    }

};