/**
 * Created by Administrator on 2017/6/12.
 */

var list1 = new TreeNode(3);

var list2 =new TreeNode(9);
var list3 = new TreeNode(20);

var list4 =new TreeNode(15);
var list5 = new TreeNode(17);
list1.left = list2;
list1.right = list3;
list3.left = list4;
list3.right =list5;


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
 }

var levelOrderBottom = function(root) {
    if(root == null) return [];
    var result = [];
// 使用map[level]的list儲存相同level節點的值
    var map = {};
// 傳入root，level 0
    find(root,0);
    for(var i in map){
        result.push(map[i])
    }
    return result.reverse();
// 傳入node與level
    function find(node,level){
        if(node == null) return;
// map[level]沒東西，map[level] = [node.val]
        if(!map[level]){
            map[level] = [node.val];
        } else {
            map[level].push(node.val);
        }
// 先處理left，再處理right
        find(node.left,level+1);
        find(node.right,level+1);
    }
};


console.log(levelOrderBottom(list1));