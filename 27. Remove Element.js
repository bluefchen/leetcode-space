/**
 * Created by Administrator on 2017/6/13.
 */


var removeElement = function (nums,val) {
    if(nums.length == 0) return nums.length;
    if(nums.indexOf(val) < 0) return nums.length;
    var count = 0;
    for (var i =0, max = nums.length; i<max; i++){
        if(nums[i] != val){
           nums[count++] = nums[i];
        }
    }
    return count;
};

console.log(removeElement([1,1,2,34,1],1));