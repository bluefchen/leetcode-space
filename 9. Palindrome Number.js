/**
 * Created by Administrator on 2017/6/17.
 */
var isPalindrome = function (x) {
    if(x < 0 || x > Math.pow(2,32)-1) return false;
    if(x < 10) return true;

    var num = x;
    var recNum = x%10;
    x = parseInt(x/10);

    while(x != 0){
        recNum = recNum * 10;
        recNum += x% 10;
        x = parseInt(x/10);
    }
    return recNum ;
};


console.log(isPalindrome(1234));