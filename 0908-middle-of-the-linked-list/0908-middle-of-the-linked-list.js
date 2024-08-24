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
    let current = head;
    let count = 0;
    while (current != null) {
        count++;
        current = current.next;
    }
    let mid = Math.floor(count / 2);
    current = head;
    while (mid--) {
        current = current.next;
    }
    return current;

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
*/