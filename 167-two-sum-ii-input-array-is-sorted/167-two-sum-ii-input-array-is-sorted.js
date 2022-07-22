/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const hm = {}
    for (let i = 0; i < numbers.length; i++){
        if (target - numbers[i] in hm) return [hm[target - numbers[i]], i+1]
        hm[numbers[i]] = i+1
                                               
    } 
};