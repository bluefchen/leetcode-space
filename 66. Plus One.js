/**
 * Created by Administrator on 2017/6/13.
 */

var plusOne = function (digits) {
    var carry =0;

    for(var i =digits.length-1; i>=0; i--){
        digits[i] = digits[i] + carry;

        if(i == digits.length -1){
            digits [i] = digits[i]+1;
        }
        if(digits[i] == 10){
            digits[i] = 0;
            carry = 1;
        }else{carry = 0}
    }

    if(carry == 1){
        digits.unshift(carry);
    }
    return digits;
};

console.log(plusOne([9,9]));