/**
 * Created by Administrator on 2017/5/11.
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s,t){
    if(s.length == t.length) return false;
    var s= s.split('').sort().join('');
    var t= t.split('').sort().join('');
    return s == t;
};


