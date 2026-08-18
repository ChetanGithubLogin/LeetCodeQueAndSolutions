/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
     let ans = 0
     let minVal = prices[0];

     for(let i = 0; i< prices.length ; i++){
        profit = prices[i] - minVal;
        if(profit > ans){ 
            ans = profit;
            }
        if(prices[i] < minVal){ 
            minVal = prices[i]
            }
     }
     return ans
};