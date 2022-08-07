/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
      let maxProf = 0;
  let buy = 0;
  let sell = buy + 1;

  while (sell < prices.length) {
    if (prices[sell] < prices[buy]) {
      buy = sell;
    }
    maxProf = Math.max(maxProf, prices[sell] - prices[buy]);
    sell++;
  }

  return maxProf;

};