/**
 * Created by Administrator on 2017/6/14.
 */

var isBalanced = function (root) {
    if(root == null || (root.right && root.left == null )) return true;

    var dL = findDeep (root.left);
    var dR = findDeep (root.right);

    var diff = Math.abs(dL - dR) <=1;

    return diff && isBalanced(root.left) && isBalanced(root.right);


    function findDeep (root){
        if(root == null){
            return 0;
        }

        var deepL = 1 + findDeep(root.left);
        var deepR = 1 +findDeep(root.right);

        return deepL>deepR ? deepL: deepR;
    }




};