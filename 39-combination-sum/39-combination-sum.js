/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target,index = 0, curr= [],combinations = []) {
    if (target <= 0){
        if (target === 0){
            combinations.push(curr.slice())
        }
        return
    }
    
    if (index < candidates.length){
        const value = candidates[index]
        curr.push(value)
        combinationSum(candidates,target-value, index++, curr,combinations)
        curr.pop()
        combinationSum(candidates,target, index++, curr,combinations)
        
    }
    
    return combinations
};