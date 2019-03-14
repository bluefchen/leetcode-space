/**
 * Created by Administrator on 2017/5/19.
 */
function diff(arr1, arr2) {
    return arr1.filter(function(val){
        return arr2.indexOf(val) < 0;
    }).concat(
        arr2.filter(function(val){
            return arr1.indexOf(val) < 0;
        })
    );
}

console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));