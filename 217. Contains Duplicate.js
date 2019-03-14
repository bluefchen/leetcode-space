/**
 * Created by Administrator on 2017/5/13.
 */
var isContainsDuplicate = function(nums){
    var map ={};
    for (var i =0; i<nums.length; i++){
        if(!map[nums[i]]) map[nums[i]] = 1;
        else{
            map[nums[i]] ++;
            return true;
        }
    }
    return false;
};

console.log(isContainsDuplicate([1,2,3,5,6]));