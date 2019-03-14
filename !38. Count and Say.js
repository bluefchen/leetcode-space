/**
 * Created by Administrator on 2017/7/1.
 */
var countAndSay = function (n) {
    if(n<= 1) return '1';
    var countSay = '1';
    for(var i=2; i<=n ; i++){
        var num = countSay.charAt(0);
        var temp = countSay;
        var count = 1;
        countSay = '';

        for(var j =1; j<temp.length;j++){
            if(temp.charAt(j)==num){
                count++
            }else{
                countSay+= count;
                countSay+= num;
                num = temp.charAt(j);
                count = 1;

            }
        }
        countSay+= count;
        count+= num;
    }
    return countSay;
};

console.log(countAndSay(11))