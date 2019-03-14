/**
 * Created by Administrator on 2017/5/14.
 */
var hammingWeight = function (n) {
    var count =0;
    var ary = n.toString(2).split('');
console.log(ary);
    for (var i in ary){
        if(ary[i] ==='1'){
            count ++;
        }
    }
    return count;
};

console.log(hammingWeight(11));