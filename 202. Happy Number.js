/**
 * Created by Administrator on 2017/5/16.
 */

    //forEach��callback �У���һ��value���ڶ���Index������������Ԫ��
    //��n = 16ʱ; v = "1", i = 0, ary = ["1", "6"]
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