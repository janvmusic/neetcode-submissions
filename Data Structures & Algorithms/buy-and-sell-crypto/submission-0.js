class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;

        for (let i = 1; i < prices.length; i++) {
            let price = prices[i];
            
            maxProfit = Math.max(maxProfit, price - minPrice);
            minPrice = Math.min(price, minPrice);
        }

        return maxProfit;
    }
}
