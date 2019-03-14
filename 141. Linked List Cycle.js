/**
 * Created by Administrator on 2017/6/11.
 */
var hasCycle = function (head) {
    if(head == null || head.next == null){
        return false;
    }

    var node = head;
    while (node!= null){
        if(node.flag){
            return true;
        }

        node.flag = true;
        node = node.next;
    }
}