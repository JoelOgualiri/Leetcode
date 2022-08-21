/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
   
    if (lists.length === 0) return null
    const result = mergeLists(lists)
    
    return result[0]

}

function mergeLists(lists){
        if (lists.length === 1) return lists

    let mid = Math.floor(lists.length/2)
    let leftList = lists.slice(0,mid)
    let rightList = lists.slice(mid)

    return merge(mergeLists(leftList), mergeLists(rightList))
}

function merge(leftList, rightList){
    const dummyHead = new ListNode()
    let tail = dummyHead;
    let left = leftList[0];
    let right = rightList[0];
    while (left !== null && right !== null){
        if (left.val < right.val){
            tail.next = left
            left = left.next
        }else{
            tail.next = right
            right = right.next
        }
        tail = tail.next
    }
    if (left === null){
        tail.next = right
    }
    if (right === null){
        tail.next = left
    }
    return [dummyHead.next]
}