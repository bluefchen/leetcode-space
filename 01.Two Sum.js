
/**
 * Created by Administrator on 2017/5/10.
 */
var twoSum = function(nums, target) {

    var map = {};
    for(var i = 0 ; i < nums.length ; i++){
        var v = nums[i];

        if(map[target-v] >= 0){
            // ��� target - v������map���ҵ�ֵx������֮ǰ�ѽ����F�^ֵx�� target = x + v
            // ��˻؂� x��λ���cĿǰv��λ��
            return [map[target-v],i]
        } else {
            // ʹ��map����Ŀǰ�Ĕ����c��λ��

            map[v] = i;
        }
    }
};
twoSum( [2, 7, 11, 15],9);