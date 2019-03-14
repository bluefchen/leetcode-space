/**
 * Created by Administrator on 2017/6/11.
 */
var reverseVowels = function (s) {
    var vowels = [];
    for(var i=0; i< s.length; i++){
        if((/^[aeiou]$/i).test(s[i])){
            vowels.push(s[i]);
        }
    }
    return vowels;

    var v = vowels.length-1;
    var sAry = s.split('');

    for(var j=0; j<sAry.length; j++){
        if((/^[aeiou]$/i).test(sAry[j])){
            sAry[j] = vowels[v--];
        }
    }
    return sAry.join('')
};


console.log(reverseVowels("leetcode"));