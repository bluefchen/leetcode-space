/**
 * Created by Administrator on 2017/5/12.
 */

/**
 *
 * @param {number} n
 * @returns {number}
 */

var climbStairs = function (n) {
    if(n<=1) return 1;

    else{
        return climbStairs(n-1)+climbStairs(n-2);
    }
};

console.log(climbStairs(5));
