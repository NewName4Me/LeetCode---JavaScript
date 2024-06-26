/**
 * 
 * @param {number[]} prices 
 */
var maxProfit = function (prices) {
    let min = prices[0];
        let max = min;
        let value = 0;
        for (let i = 0; i < prices.length; i++) {
            if (i != prices.length - 1 && prices[i] <= min) {
                max = min = prices[i];
            } else if (prices[i] > max) {
                max = prices[i];
            }
            value = max - min > value ? max - min : value;
        }
        return value;
}

const prices = [10, 1, 5, 6, 7, 1];
const prices2 = [2, 4, 1];

console.log(maxProfit(prices));
console.log('----------------');
console.log(maxProfit(prices2));