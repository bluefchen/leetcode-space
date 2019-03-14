/**
 * Created by Administrator on 2017/5/19.
 */
var str = 'asdffd';
for(var i=0; i<str.length; i++){
    var str1 = str.substring('',i);
    var str2 = str.substring(i+1,str.length);
    console.log('str='+str1,'str2='+str2)
}

 console.log(str.substring('',0));
console.log(str.substring(1,6));



console.log(str.indexOf('d1f'));



var getRow = function (rowIndex) {
    if(rowIndex == 0)  return [1];
    if(rowIndex == 1) return [1,1];

    var ary = [1];
    for(var i =1; i<rowIndex ; i++){
        var pre = ary[i-1];
        for(var j =1; j< i ; j++){
            var cur = ary[i] ? ary[i] : 0;
            ary[j] = cur+pre;
            pre = ary;
        }
        ary.push(1);
    }
    return ary;

};