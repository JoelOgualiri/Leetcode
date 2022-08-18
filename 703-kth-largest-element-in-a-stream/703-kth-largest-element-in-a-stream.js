/**
 * @param {number} k
 * @param {number[]} nums
 */

class KthLargest{
    constructor(k, nums) {
    this.heap = [null];
    this.size = k;
    this.initialize(nums.sort((a, b) => b - a));
  }

  initialize(nums) {
    if (nums.length !== 0) {
      let end = this.size > nums.length ? nums.length : this.size;
      for (let i = 0; i < end; i++) {
        this.insert(nums[i]);
      }
    }
  }
  swap(index1, index2) {
    return ([this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ]);
  }
  remove() {
    const min = this.heap[1];
    const end = this.heap.pop();
    if (this.heap.length >= 2) {
      this.heap[1] = end;
      if (this.heap.length === 2) {
        return min;
      }
      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          this.swap(1, 2);
        }
        return min;
      }
      let parent = 1;
      let leftChild = parent * 2;
      let rightChild = parent * 2 + 1;

      while (
        this.heap[parent] > this.heap[leftChild] ||
        this.heap[parent] > this.heap[rightChild]
      ) {
        if (this.heap[leftChild] < this.heap[rightChild]) {
          this.swap(leftChild, parent);
          parent = leftChild;
        } else {
          this.swap(rightChild, parent);
          parent = rightChild;
        }
        leftChild = parent * 2;
        rightChild = parent * 2 + 1;
        if (
          this.heap[leftChild] === undefined ||
          this.heap[rightChild] === undefined
        ) {
          break;
        }
      }
      return min;
    } else if (this.heap.length === 1) {
      return min;
    } else {
      return null;
    }
  }
  insert(val) {
    this.heap.push(val);
    if (this.heap.length > 2) {
      let curr = this.heap.length - 1;
      while (curr > 1 && this.heap[Math.floor(curr / 2)] > this.heap[curr]) {
        this.swap(Math.floor(curr / 2), curr);
        curr = Math.floor(curr / 2);
      }
    }
  }

  add(val) {
    this.insert(val);
    if (this.heap.length - 1 > this.size) {
      this.remove();
      return this.heap[1];
    }
    return this.heap[1];
  }
}

/** 
 * @param {number} val
 * @return {number}
 */
 

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */