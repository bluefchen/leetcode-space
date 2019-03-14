/**
 * Created by Administrator on 2017/5/13.
 */
var MoveZeroes = function(nums){
    var tags = 0;
    for (var i =0; i<nums.length; i++){

        var numberOfZero = 0;
        if(nums[i] != 0){
            //nums[tags] = nums[i];
            //tags ++;
            nums[tags++] = nums [i]
        }else{
            numberOfZero ++;
        }
    }
    for (tags ;tags<nums.length;tags++){
        nums[tags] = 0;
    }
    return nums;
};
console.log(MoveZeroes([0, 0,0,22,0,4,5,0]));


//nums[tags] = nums[i];
//tags ++;
//这两步可以记为nums[tags++] = nums [i];