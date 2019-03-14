/**
 * Created by Administrator on 2017/5/13.
 */

var isSameTree = function(node1,node2){
    if(node1 === null && node2 ===null){
        return true;
    }
    if(node1 ===null && node2 !=null || node1 != null && node2 ===null){
        return false;
    }
    if(node1.value != node2.value ){
        return false;
    }
    return isSameTree(node1.left,node2.left) && isSameTree(node1.right,node2.right);
};