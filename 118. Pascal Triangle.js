/**
 * Created by Administrator on 2017/6/14.
 */

var generate = function (numRows) {
    if(numRows == 0) return [];

    var trigle = [[1]]; //作为第一行
    for(var i =1; i< numRows ; i++){
        var prevRow = trigle[i-1];
        var curRow = [1]; //作为下列每行的第一个数

        for(var j=1; j<= i; j++){
            var pre = prevRow[j-1];
            var cur = prevRow[j] ? prevRow[j] : 0;
            curRow[j]=pre+cur;//以后每行的第n个数为上一行的n-1个数加n个数，若第n个数不存在，则为0
        }
        trigle.push((curRow));

    }
    return trigle;
};

console.log(generate(5));

