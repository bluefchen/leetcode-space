/**
 * Created by Administrator on 2017/6/14.
 */

var generate = function (numRows) {
    if(numRows == 0) return [];

    var trigle = [[1]]; //��Ϊ��һ��
    for(var i =1; i< numRows ; i++){
        var prevRow = trigle[i-1];
        var curRow = [1]; //��Ϊ����ÿ�еĵ�һ����

        for(var j=1; j<= i; j++){
            var pre = prevRow[j-1];
            var cur = prevRow[j] ? prevRow[j] : 0;
            curRow[j]=pre+cur;//�Ժ�ÿ�еĵ�n����Ϊ��һ�е�n-1������n����������n���������ڣ���Ϊ0
        }
        trigle.push((curRow));

    }
    return trigle;
};

console.log(generate(5));

