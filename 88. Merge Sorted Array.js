/**
 * Created by Administrator on 2017/6/29.
 */
var merge = function (nums1, m, nums2, n) {
    var index = 0;
    for(var i = m; i<m+n; i++){
        nums1[i] = nums2[index++];
    }
//ʹ��ð������ PS��ʵ���ϲ�����ð������ð�����������ķŵ����
    for(var j = 0; j<nums1.length -1 ;j++){
        for(var k = j+1;k < nums1.length;k++){
            if(nums1[k]<nums1[j]){
                var temp = nums1[j];
                nums1[j] = nums1[k];
                nums1[k] = temp;
            }
        }
    }
};
//������ð������
function bubbleSort(arr){
    var i =arr.length, j;
    var tempExchangVal;
    while(i>0){
        for(var j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                tempExchangVal = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = tempExchangVal;
            }
        }
        i--;
    }
    return arr;
}

var arr = [3, 2, 4, 9, 1, 5, 7, 6, 8];
var arrSorted = bubbleSort(arr);
console.log(arrSorted);