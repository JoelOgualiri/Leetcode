/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;
    let right = left +1;
    
    while (right < nums.length && left < nums.length){
        if (nums[left] !== 0 && left < nums.length){
            left++
        }
        if (nums[left] === 0){
            right = left +1
            while (nums[right] === 0 && right < nums.length){
                right++
            }
            if (right >= nums.length){
                return nums
            }
            [nums[left], nums[right]] = [nums[right], nums[left]]
            left++
        }
    }
    return nums
}