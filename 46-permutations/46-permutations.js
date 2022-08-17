/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    
    
    return permuatationHelper(nums)
};

function permuatationHelper(nums){
    if (nums.length === 0) return [[]]
    
    const result = []
    const first = nums[0]
    const permutations = permuatationHelper(nums.slice(1))
    
    for (let num of permutations){
        for (let i = 0; i <= num.length; i++){
            result.push([...num.slice(0,i), first, ...num.slice(i)])
        }
    }
    return result
}