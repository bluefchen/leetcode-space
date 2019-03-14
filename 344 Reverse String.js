/**
 * Created by Administrator on 2017/5/10.
 */
var reverseString = function(s){
    var result = '';
    var ary = [];
    ary = s.split('');
    for(var i = ary.length-1; i>=0;i--){
        result = result + ary[i]
    }
    return result;
};
//console.log(reverseString('hello'));

/**
 * @param {string} s
 * @return {string}
 */
var reverseString_Up = function(s) {
    var ary = s.split("");
    for(var i = 0, max = (ary.length-1)/2 ; i < max   ; i++){
        var temp = ary[i];
        ary[i] = ary[ary.length - 1 - i];
        ary[ary.length - 1 - i] = temp;
    }
    return ary.join("");
};
console.log(reverseString_Up('hello!'));
console.log(typeof ([1,2,3].join('')));