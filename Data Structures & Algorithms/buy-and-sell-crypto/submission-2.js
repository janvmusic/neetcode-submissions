class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let buyIdx = 0;
        let sellIdx = 1;

        while (sellIdx < prices.length) {
            let buy = prices[buyIdx];
            let sell = prices[sellIdx];
            

            if (buy < sell) {
                let currProfit = sell - buy;
                profit = Math.max(profit, currProfit);
            } else { 
                buyIdx = sellIdx;
            }

            sellIdx++;
        }

        return profit;
    }
}
