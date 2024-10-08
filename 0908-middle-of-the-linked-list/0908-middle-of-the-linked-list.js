/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    if (head == null || head.next == null) {
        return head;
    }

    let slow = head;
    let fast = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;

};

/* 
i = 0
[1,2,3,4,5]
mid=2;

head = 1
current = head =1{2,3,4,5}
mid --1
current =2{3,4,5}
mid -- 0
current =3 {4,5} 

return 3 {4,5}


slow and first pointer:
head = [1,2,3,4,5]
        f   f   f=>next.null


head = [1,2,3,4,5,6]
        f   f   f    f =>null

*/