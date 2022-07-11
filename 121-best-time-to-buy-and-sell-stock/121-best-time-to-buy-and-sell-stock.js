/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let buy = 0;
    let sell = buy + 1;
    while (sell < prices.length && buy < sell){
        if (prices[sell] - prices[buy] > max){
            max = prices[sell] - prices[buy]
        }else if (prices[buy] > prices[sell]){
            buy = sell
        }
        sell++
    }
    return max

};