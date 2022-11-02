class Node {
  constructor(key, val) {
    this.key = key
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(size) {
    this.head = new Node(null,null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.hm = {};
    this.count = 0;
    this.size = size;
  }
  removeNode() {
    const nodeVal = this.tail.prev.key;
    this.tail.prev.prev.next = this.tail;
    this.tail.prev = this.tail.prev.prev;
    return nodeVal;
  }

  updateHead(node) {
    if (node.next === null && node.prev === null) {
      this.head.next.prev = node;
      node.next = this.head.next;
      node.prev = this.head;
      this.head.next = node;
    } else if (node.prev.val === null && node.next.val === null) {
      return;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
      node.next = this.head.next;
      this.head.next.prev = node;
      node.prev = this.head;
      this.head.next = node;
    }
  }
  put(key, val) {
    if (this.head.next.val === null) {
      const node = new Node(key, val);
      this.hm[key] = node;
      this.head.next = node;
      this.tail.prev = node;
      node.prev = this.head;
      node.next = this.tail;
      this.count++;
    } else {
      if (key in this.hm) {
        this.hm[key].val = val;
        const node = this.hm[key];
        this.updateHead(node);
      } else {
        const node = new Node(key, val);
        this.hm[key] = node;
        this.updateHead(node);
        this.count++;
      }
    }
    if (this.count > this.size) {
      delete this.hm[this.removeNode()];
      this.count--;
    }
  }
  get(key) {
    if (!(key in this.hm)) return -1;
    const node = this.hm[key];
    this.updateHead(node);
    return node.val;
  }
}