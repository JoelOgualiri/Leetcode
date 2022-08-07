/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode()
    let tail = dummy
    let carry = 0
    let curr1 = l1;
    let curr2 = l2;
    
    while (curr1 !== null || curr2 !== null || carry !== 0){
        let val1 = curr1 === null? 0:curr1.val;
        let val2 = curr2 === null?0:curr2.val;
        let sum = val1 + val2 + carry;
        carry = 0
        if (sum >= 10){
            sum = sum % 10;
            carry = 1;
        }
        tail.next = new ListNode(sum)
        tail = tail.next;
        
        if (curr1 !== null){
            curr1 = curr1.next
        }
        if (curr2 !== null){
            curr2 = curr2.next
        }
        
    }
    
    return dummy.next
};