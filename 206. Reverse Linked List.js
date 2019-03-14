/**
 * Created by Administrator on 2017/5/13.
 */
var reverseList = function(head){
    if(!head){
        return null;
    }
    if(!head.next){
        return head;
    }
    var cur = head.next;
    var pre = head;
    pre.next = null;
    while(cur){
        var temp = cur;
        cur = cur.next;
        temp.next = pre;
        pre = temp;
    }
    return pre;
};
console.log(reverseList([1,2,3,4]));

