class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = prices.length - 1;
        let buy = prices[0];
        let sell = prices[right];
        let profit = 0;
        for (let i = 0; i < prices.length; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                if (prices[j] > prices[i] && prices[j] - prices[i] > profit) {
                    profit = prices[j] - prices[i];
                }
            }
        }
        return profit;
        // while (right >= left) {
        //     if (buy > prices[left]) {
        //         buy = prices[left];
        //         left++;
        //     } else if (prices[right] > sell) {
        //         sell = prices[right];
        //         right--;
        //     } else {
        //         right--;
        //         left++;
        //     }
        // }
        // return buy > sell ? 0 : sell - buy;
    }
}
