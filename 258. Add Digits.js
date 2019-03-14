/**
 * Created by Administrator on 2017/5/12.
 */

var AddDigits = function(num){

    while(num>=10){
        var sum = 0;
        var num_ = (''+num).split('');
        num_.forEach(function (v) {
            sum += parseInt(v);
        });
        num = sum;
        return num;
    }
    return num;
};

console.log(AddDigits(900));

//将数字转化为字符串：''+num;