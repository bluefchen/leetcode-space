/**
 * Created by Administrator on 2017/6/18.
 */

/**
 *
 * @param val
 * @constructor
 */
function TreeNode (val){
    this.val = val;
    this.left = this.right = null;
}

/**
 * 遇到二叉树，更多的是选择递归；
 * @param root
 * @param sum
 * @returns {boolean}
 */
var hasPathSum = function (root, sum) {
    if(root == null) return false;

    function sumR2L (root,s){
        if(root.left == null && root.right == null){
            s+= root.val;
            return s== sum;
        }
        if(root.left != null && root.right == null){
            sumR2L(root.left,s+root.val);
        }
        if(root.right!= null && root.left == null){
            sumR2L(root.right ,s+root.val);
        }
        return sumR2L(root.left,s+root.val)|| sumR2L(root.right,s+root.val);



    }
};