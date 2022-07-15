/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0
    for (let i = 1; i <= nums.length; i++){
        sum = sum + i
    }
    
    for (let num of nums){
        sum = sum - num
    }
    return sum

};