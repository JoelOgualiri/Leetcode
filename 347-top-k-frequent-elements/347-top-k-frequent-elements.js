/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const hm = {} 
    const result = []
    const res = []
    for (let num of nums){
        if (num in hm){
            hm[num]++
        }else{
            hm[num] = 1
        }
    }
    for (let key in hm){
        result.push([key, hm[key]])
        
    }
    
    result.sort((a,b) => b[1]-a[1]) 
    for (let i = 0; i< k; i++){
        res.push(result[i][0])
    }
    return res
    
};