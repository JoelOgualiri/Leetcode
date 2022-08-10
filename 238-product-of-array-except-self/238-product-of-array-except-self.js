/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
   let prefix  = []
   let postfix = new Array(nums.length).fill(1)
   let result = []
   
   prefix[0] = nums[0]
    for (let i = 1; i < nums.length; i++){
        prefix[i] = prefix[i-1]*nums[i]
    }
    postfix[postfix.length-1] = nums[nums.length-1]
    for (let i = postfix.length -2; i >= 0; i--){
        postfix[i] = postfix[i+1]*nums[i]
    }
    for (i = 0; i < nums.length; i++){
        let currPre = prefix[i-1]===undefined?1:prefix[i-1]
        let currPos = postfix[i+1]===undefined?1:postfix[i+1]
        result[i] = currPre*currPos
    }
    return result
    
};