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
    const dummy = new ListNode()
    let tail = dummy
    const heapNodes = new MinHeap
    for (let list of lists){
        let current = list
        while (current !== null){
            heapNodes.insert(current)
            current = current.next
        }
    }
    
    while (true){
        tail.next = heapNodes.remove()
        if (tail.next === null){
            break
        }
        tail = tail.next
        
    }
    return dummy.next
}

class MinHeap{
    constructor(){
        this.values = [null]
    }
    swap(index1,index2){
        return [this.values[index1],this.values[index2]] = [this.values[index2],this.values[index1]]
    }
    insert(node){
        this.values.push(node)
        if (this.values.length > 2){
            let childIdx = this.values.length - 1
            while (childIdx > 1 && this.values[Math.floor(childIdx/2)].val > this.values[childIdx].val){
                this.swap(Math.floor(childIdx/2), childIdx)
                childIdx = Math.floor(childIdx/2)
            }
        }
    }
    
    remove(){
        if (this.values.length === 1) return null
        const min = this.values[1]
        let end = this.values.pop()
        if (this.values.length === 1) return min
        this.values[1] = end
        if (this.values.length === 2){
            return min
        }
        if (this.values.length === 3){
            if (this.values[1].val > this.values[2].val){
                this.swap(1,2)
            }
            return min
        }
        let parent = 1;
        let leftChild = 2 * parent;
        let rightChild = 2*parent + 1;
        
        while (this.values[parent].val > this.values[leftChild].val || this.values[parent].val > this.values[rightChild].val){
            if (this.values[leftChild].val < this.values[rightChild].val){
                this.swap(leftChild,parent)
                parent = leftChild
            }else{
                this.swap(rightChild, parent)
                parent = rightChild
            }
            leftChild = 2*parent
            rightChild = 2 * parent +1
            
            if (this.values[leftChild] === undefined || this.values[rightChild] === undefined)
                return min
        }
        return min
    }
}