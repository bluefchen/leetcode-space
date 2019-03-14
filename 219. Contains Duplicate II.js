var containsNearbyDuplicate = function (nums, k) {
    if (nums.length <= 1) return false;
    var map = {};
    for (var i in nums) {
        var v = nums[i];
        if (map[v] && i - map[v] <= k) {
            return true;
        }
        map[v] = i;
    }
    console.log(map);
    return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 4, 1], 3));