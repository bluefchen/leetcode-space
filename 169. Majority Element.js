/**
 * Created by Administrator on 2017/5/13.
 */

var majorityElement = function(nums){
    if(nums.length ===1) return nums[0];
    var map = {};
    for (var i =0 ;i<nums.length; i++){
        if(!map[nums[i]]) {
            map[nums[i]] = 1;
        }
        else{
            map[nums[i]]++;

            if(map[nums[i]]>nums.length/2) return nums[i];
        }
    }

}

var maps = {
    1:2,
    2:3,
    3:4
}
console.log(maps[2])

console.log(majorityElement([1,1,3,1,12]));