/**
 * Created by Administrator on 2017/5/13.
 */

var columnNumber = function (columnTitle) {

    var sum = 0;
    var exp = 0;

    for (var i =columnTitle.length-1; i>=0; i--){
        var temp = columnTitle.charCodeAt(i)-64;
        temp = temp*Math.pow(26,exp++);
        sum += temp;
    }
    return sum;
};

console.log(columnNumber('AA'));