/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    const marge = new ListNode(null, null);
    let temp = marge;

    while (list1 || list2) {
        if (list1 && list2) { // list2 = [4]
            if (list1.val < list2.val) {
                temp.next = list1;//[1,1,2,3,4]
                list1 = list1.next;//[4]
            } else {
                temp.next = list2;//[1,1,2,3,4]
                list2 = list2.next;//[,4]
            }
        } else if (list1 && list2 == null) {
            temp.next = list1;
            list1 = list1.next;
        } else if (list1 == null && list2) {
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;//[0,1,1,2,3]
    }
    return marge.next;
};