/**
 * Created by Administrator on 2017/6/15.
 */

var removeDuplicates = function (nums) {
    if(nums == null || nums.length == 0) return 0;
    if(nums.length == 1) return 1;

    var count =0;

    for (var i =0; i<nums.length; i++){
        if(nums[count] != nums[i]){
            count++;
            nums[count] = nums[i];
        }
    }
    return ++count;

};

console.log(removeDuplicates())