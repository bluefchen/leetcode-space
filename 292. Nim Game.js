/**
 *
 * @param n {number}
 * @returns {boolean}
 */

var canWinNim = function (n) {
    if(n<4){
        return true;
    }
    if(n%4 ==0){
        return false;
    }else{
        return true;
    }

};


//ֱ�Ӱ�if(n%4!=0)��Ϊ����ֵ


var canWinNim_UP = function (n) {
    if(n<4){
        return true;
    }
    return (n%4)!=0;

};