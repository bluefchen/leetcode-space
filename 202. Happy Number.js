/**
 * Created by Administrator on 2017/5/16.
 */

    //forEach的callback 中，第一个value，第二个Index，第三个，本元素
    //如n = 16时; v = "1", i = 0, ary = ["1", "6"]
var isHappyNumber = function(n){

    var store = {};

    while (!store[n] && n!=1){
        store[n] = n;
        n.toString().split('').forEach(function (value, index,ary) {
            if(index == 0) n=0;
            n += value*value;
        });

        n =parseInt(n);
    }
    return n==1;
};
console.log(isHappyNumber(4));