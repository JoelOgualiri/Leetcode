/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const heap = new maxHeap(stones)
    return heap.getWeight()

    
};

class maxHeap{
    constructor(array){
        this.heap  = [null]
        this.initialise(array)
    }
    
    initialise(stones){
        for (let i  = 0; i < stones.length; i++){
            this.insert(stones[i])
    }
    
    }
    
    swap(index1, index2){
        return [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }
    
    insert(val){
        this.heap.push(val)
        if (this.heap.length > 2){
            let child = this.heap.length-1
            while (child > 1 && this.heap[Math.floor(child/2)] < this.heap[child]){
                this.swap(child,Math.floor(child/2))
                child = Math.floor(child/2)
            }
        }
    }
    remove(){
        if (this.heap.length < 2){
            return null
        }
        const max = this.heap[1]
        let end = this.heap.pop()
       
        
        if (this.heap.length >= 2){
             this.heap[1] = end
            if (this.heap.length === 2){
                return max
            }
            if (this.heap.length === 3 ){
                if (this.heap[1] < this.heap[2]){
                    this.swap(1,2)
                    return max
                }
            }
            
            let parent = 1
            let leftChild = 2 * parent
            let rightChild = 2 * parent + 1
            
            while (this.heap[parent] < this.heap[leftChild] || this.heap[parent] < this.heap[rightChild]){
                if (this.heap[leftChild] > this.heap[rightChild]){
                    this.swap(leftChild,parent)
                    parent = leftChild
                }else{
                    this.swap(rightChild, parent)
                    parent = rightChild
                }
                
                leftChild = 2*parent;
                rightChild = 2 * parent + 1;
                
                if (this.heap[leftChild] === undefined || this.heap[rightChild] === undefined){
                    return max
                }
            }
            return max
        }
        else{
            return max
        }
    }
    
    getWeight(){
        while (this.heap.length > 2){
            let first = this.remove()
            let second = this.remove()
            if (this.heap.length === 1){
                return Math.abs(first-second)
            }
            if (Math.abs(first-second) !== 0){
                this.insert(Math.abs(first-second))
            }
        }
        return this.remove()
    }
}