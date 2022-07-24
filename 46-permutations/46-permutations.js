/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length === 0) return [[]]
    
    const first = nums[0]
    const result = []
    const permutation = permute(nums.slice(1))
    
    for (let perm of permutation){
        for (let i = 0; i <= perm.length;i++){
            result.push([...perm.slice(0,i), first, ...perm.slice(i)])
        }
    }
    return result
};