/**
 * Created by Administrator on 2017/7/1.
 */
var lengOfLastWord = function(s){
    var ary = s.split(/\s/);
    console.log(ary);
    if (s.length == 0) return 0;
    if (ary.length == 0) return 0;

    while(ary.length > 0){
        var tempStr = ary.pop();
        if(ary.length == 0){
            return tempStr.length;
        }
    }
    return 0
};

console.log(lengOfLastWord('hello world'));