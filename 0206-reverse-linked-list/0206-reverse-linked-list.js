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
var reverseList = function (head) {
    let reversedList = new ListNode();//{0,null}
    reversedList = reversedList.next;
    //  head = [2,3,4,5]
    while (head) {
        let newNode = new ListNode(head.val);// {2,null}
        newNode.next = reversedList;//{2{1{0,null}}}
        reversedList = newNode;//{1{0,null}}
        head = head.next;
    }
    return reversedList;
};