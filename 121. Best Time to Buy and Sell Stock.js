/**
 * Created by Administrator on 2017/6/9.
 */

var maxProfit = function (prices){
    var min = prices[0];

    var profit = 0;

    for (var i = 0; i<prices.length; i++){
        if(prices[i]<min){
            min = prices[i];
        }

        var calProfit = prices[i] - min;
        if(calProfit > profit){
            profit = calProfit;
        }
    }
    return profit;
};

console.log(maxProfit([7, 6, 4, 3, 1]));
