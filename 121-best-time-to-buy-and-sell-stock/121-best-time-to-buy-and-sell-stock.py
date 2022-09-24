class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        profit = 0
        buy = 0
        sell = buy + 1
        while sell < len(prices):
            if prices[sell] < prices[buy]:
                buy = sell
            elif prices[sell] > prices[buy]:
                profit = max(prices[sell]-prices[buy],profit)
            sell = sell + 1
        return profit
        