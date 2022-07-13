/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let hashmap = {}
    let max = nums[0]
    for (let num of nums){
        if (num in hashmap){
            hashmap[num]++
        }else{
            hashmap[num] = 1
        }
    }
    for (let char in hashmap){
        if (hashmap[char] > nums.length/2){
            if (hashmap[char] > hashmap[max]){
                max = char
            }
        }
    }
    return max
};