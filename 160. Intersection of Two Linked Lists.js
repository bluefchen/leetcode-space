var getIntersectionNode = function (headA, headB) {
    var diff = getDiff(headA, headB);
    if (diff > 0) {
        while (diff > 0) {
            headA = headA.next;
            diff--
        }
    } else {
        while (diff < 0) {
            headB = headB.next;
            diff++
        }
    }
    while (headA != null) {
        if (headA == headB) {
            return headA
        }
        headA = headA.next;
        headB = headB.next;
    }
    return null;
    
}
function getDiff(nodeA, nodeB) {
    var aLength = 0;
    var bLength = 0;
    while (nodeA != null) {
        aLength++;
        nodeA = nodeA.next;
    }
    while (nodeB != null) {
        bLength++;
        nodeB = nodeB.next
    }
    return aLength - bLength;
};