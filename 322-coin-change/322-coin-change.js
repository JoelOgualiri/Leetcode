/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const result = coinChangeHelper(coins, amount) 
   if (result === Infinity){
       return -1
   }
    return result
};

function coinChangeHelper(coins, amount, memo = {}){
    
     if (amount < 0) return -1
    if (amount === 0) return 0;
    if (amount in memo) return memo[amount]
    
    let minCount = +Infinity
    for (let coin of coins){
        let res = coinChangeHelper(coins, amount-coin, memo)
        if (res >= 0){
            minCount = Math.min(minCount, 1 + res)
           
        }
    }
    memo[amount] = minCount
    return minCount
}