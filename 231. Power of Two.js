/**
 * Created by Administrator on 2017/5/14.
 */


/**
 *
 * @param {number} num
 * @returns {boolean}
 */
var isPowerOfTwo = function(num){

    while (num>3){
        if (num%2 !=0) return false;
        num = parseInt(num/2);
    }


    if(num<=0) return false;
    if(num === 1 || num ===2) return true;
};

console.log(isPowerOfTwo(8));