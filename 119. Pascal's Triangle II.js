/**
 * Created by Administrator on 2017/6/16.
 */

var getRow = function (rowIndex) {
    if(rowIndex == 0) return [1];
    if(rowIndex == 1) return [1,1]

    var ary = [1];
    for(var j = 1 ; j<rowIndex; j++){
        var pre = ary [j-1];

        for(var k =1 ; k < j ; k++){
            var cur = ary [k] ? ary[k] : 0;
            ary[k]=(pre + cur) ;
            pre = cur;
        }
        ary.push(1);

    }
    return ary;
};

console.log(getRow(3));
