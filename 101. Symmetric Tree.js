/**
 * Created by Administrator on 2017/6/13.
 */
var isSymmetricTree = function (root) {
    //ÏÈ·´×ª
    function invertBinaryTree (node){
        if(node == null || node.right && node.left == null){
            return node;
        }
        temp = node.left;
        node.left = invertBinaryTree(node.right);
        node.right = invertBinaryTree(temp);
        return node;
    }

    function isSameTree (node1,node2){
        if(node1 == null && node2 == null) return true;
        if(node1 == null && node2 != null || node1 != null && node2 == null) return false;
        if(node1.value != node2.value){
            return false
        }

        return isSameTree(node1.left,node2.left) && isSameTree(node1.right , node2.right)
    }

    if(root == null || (root.right == null && root.left == null)) return true;

    root.right = invertBinaryTree(root.right);
    return isSameTree(root.left,root.right);

};