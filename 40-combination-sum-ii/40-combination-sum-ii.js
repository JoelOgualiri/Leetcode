/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function(candidates, target){
    candidates.sort((a,b) => (a-b));
    const combinations = []
    
    return dfs(0,candidates,target,curr=[],combinations)
    
    
    
    
   
         
       
 
};
function dfs(i, candidates, target, curr, combinations){
    if (target <= 0){
        if (target === 0){
            combinations.push(curr.slice())
        }
        return
    }
    for (let j = i; j < candidates.length; j++){
        if (i !== j && candidates[j] === candidates[j-1]){
            continue
        }
        curr.push(candidates[j])
        dfs(j+1, candidates, target-candidates[j], curr,combinations)
        curr.pop()
    }
    
    
    return combinations
}