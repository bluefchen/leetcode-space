/**
 * Created by Administrator on 2017/6/29.
 */
var merge = function (nums1, m, nums2, n) {
    var index = 0;
    for(var i = m; i<m+n; i++){
        nums1[i] = nums2[index++];
    }
//使用冒泡排序法 PS！实际上并不是冒泡排序，冒泡排序会把最大的放到最后
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
//真正的冒泡排序
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