/**
 * Created by Administrator on 2017/6/12.
 */
var rob = function(nums){
    var maxS = new Array();
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0],nums[1]);

    maxS.push(nums[0]);
    maxS.push(Math.max(nums[0],nums[1]));

    for(var i=2; i<nums.length; i++){

        maxS[i] = Math.max((nums[i]+maxS[i-2]),maxS[i-1]);
    }
    return maxS.pop();
};

console.log(rob([2,4,5,3]));