/**
 * Created by Administrator on 2017/6/16.
 */

var trailingZeroes = function (n) {
    if(n< 5) return 0;

    var count = 0;
    while (n >= 5){
        count += Math.floor(n/5);

        n = parseInt(n/5)

    }
    return count;
};