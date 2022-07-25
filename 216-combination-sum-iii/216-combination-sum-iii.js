/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    const combinations = [];
    const nums = []
    const curr = [];
    for (let i = 1; i <= 9; i++){
        nums.push(i)
    }
    
    return dfs(0,k,n,nums,combinations,curr)
};

function dfs(i, k, n,nums, combinations,curr){
    if (n < 0) return 
    if (curr.length === k){
        if (n=== 0){
            combinations.push(curr.slice())
        }
        return 
    }
    for (let j = i; j < nums.length; j++){
        curr.push(nums[j])
        dfs(j+1, k, n - nums[j],nums, combinations,curr);
        curr.pop()
    }
    return combinations
}