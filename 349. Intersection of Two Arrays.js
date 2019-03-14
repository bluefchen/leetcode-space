/**
 * Created by Administrator on 2017/5/13.
 */

/**
 *
 * @param array1
 * @param array2
 * @returns {Array}
 * @constructor
 */
var IntersectionArrays = function(array1,array2){
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
        if(store.indexOf(array[i]) >=0 && result.indexOf(array[i])===-1){
            result.push(array[i]);
        }
    }
    return result;

};

console.log(IntersectionArrays([11,22,33,44,44],[11,33,44,44]));