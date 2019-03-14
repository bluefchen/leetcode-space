/**
 * Created by Administrator on 2017/6/29.
 */
var wordPattern = function (pattern,str) {
    var strMap = {};
    var ary = str.split(' ');
    //var ary = str.split(/\s/);

    console.log()
    if(pattern.length != ary.length){return false;}
    for(var i in pattern){
        if(!strMap[pattern[i]]){
            strMap[pattern[i] = ary[i]];
        }else if(strMap[pattern[i] != ary[i]]){
            return false;
        }

        if(!strMap[ary[i]]){
            strMap[ary[i] = pattern[i]]
        }else if( strMap[ary[i] != pattern[i]]){
            return false;
        }
    }
    return true;

};
console.log(wordPattern("abba","dog cat cat dog"));