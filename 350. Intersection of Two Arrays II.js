/**
 * Created by Administrator on 2017/5/13.
 */
var IntersectionArrays = function(array1,array2){
    //console.log(array2,array2.length,array2.indexOf(null))
    var store;
    var array;
    var result = [];
    if (array1.length > array2.length) {
        store = array1;
        array = array2;
    }else {
        store = array2;
        array = array1;
    }
    for(var i =0; i< array.length; i++){
        if(store.indexOf(array[i]) >=0){
            result.push(array[i]);
            store.splice([store.indexOf(array[i])],1);
        }
    }
    return result;
};

console.log(IntersectionArrays([11,22,33,44,44],[11,44,44,null]));