/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let result = []
    for (let i = 0; i < temperatures.length; i++){
        let count = 0
        result[i] = count
        for (let j = i+1; j < temperatures.length; j++){
            count++
            if (temperatures[j] > temperatures[i]){
                result[i] = count
                break
            }
        }
    }
    return result
};