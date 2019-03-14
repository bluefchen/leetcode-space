/**
 * Created by Administrator on 2017/5/13.
 */
var invertedBinaryTree = function (node){
    if(node === null || node.left === null && node.right ===null){
        return node;
    }
    var temp = node.left;
    node.left = invertedBinaryTree(node.right);
    node.right = invertedBinaryTree(temp);
    return node;
};