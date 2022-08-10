/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const hm = {};
    let count = 0
    let result = 0;
    for (let num of nums){
        hm[num] = 1
    }
    for (let key in hm){
        if (!(String(parseInt(key)-1) in hm)){
            count = 1;
            let next = parseInt(key) + 1
            while (String(next) in hm){
                count++
                next++
            }
            result = Math.max(count,result)
        }
    }
    return result
};