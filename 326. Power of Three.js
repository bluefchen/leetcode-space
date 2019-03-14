/**
 * Created by Administrator on 2017/5/14.
 */

var isPowerOfTwo = function(num){

    while (num>3){
        if (num%3 !=0) return false;
        num = parseInt(num/3);
    }


    if(num<=0 || num===2) return false;
    if(num === 1 || num ===3) return true;
};

console.log(isPowerOfTwo(8));