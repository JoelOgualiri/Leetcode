/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class maxHeap {
  constructor() {
    this.heap = [{ val: null, freq: null }];
  }
  insert(node) {
    this.heap.push(node);
    if (this.heap.length > 2) {
      let idx = this.heap.length - 1;
      while (this.heap[idx].freq > this.heap[Math.floor(idx / 2)].freq) {
        if (idx > 1) {
          [this.heap[idx], this.heap[Math.floor(idx / 2)]] = [
            this.heap[Math.floor(idx / 2)],
            this.heap[idx],
          ];
          if (Math.floor(idx / 2) > 1) {
            idx = Math.floor(idx / 2);
          } else {
            break;
          }
        }
      }
    }
  }

  remove() {
    let largest = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);
      if (this.heap.length === 2) {
        return largest.val;
      }
      if (this.heap.length === 3) {
        if (this.heap[1].freq < this.heap[2].freq) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return largest.val;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;

      while (
        this.heap[i].freq < this.heap[left].freq ||
        this.heap[i].freq < this.heap[right].freq
      ) {
        if (this.heap[left].freq > this.heap[right].freq) {
          [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]];
          i = left;
        } else {
          [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]];
          i = right;
        }
        left = 2 * i;
        right = 2 * i + 1;

        if (this.heap[left] === undefined || this.heap[right] === undefined) {
          break;
        }
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }
    return largest.val;
  }
}

var topKFrequent = function(nums, k) {
    const hm = {};
  const result = [];
  for (let num of nums) {
    if (num in hm) {
      hm[num]++;
    } else {
      hm[num] = 1;
    }
  }
  const mxHeap = new maxHeap();

  for (let key in hm) {
    mxHeap.insert({ val: key, freq: hm[key] });
  }
  for (let i = 0; i < k; i++) {
    let curr = mxHeap.remove();
    if (curr === null) break;
    result.push(curr);
  }
  return result;
};