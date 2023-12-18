// 地址: https://www.bilibili.com/video/BV1P5411H77a/?spm_id_from=333.337.search-card.all.click&vd_source=6e9c2de5b89c2ba4e13469e295319397

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
  }
  append(element) {
    let node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.getNode(this.size - 1);
      current.next = node;
    }
    this.size++;
  }

  appendAt(position, element) {
    let node = new Node(element);
    if (position < 0 || position > this.size) {
      throw new Error("position out of range");
    } else if (position === 0) {
      node.next = this.head;
      this.head = node;
      this.size++;
    } else {
      let pre = this.getNode(position - 1);
      node.next = pre.next;
      pre.next = node;
      this.size++;
    }
  }

  remove(position) {
    if (position < 0 || position > this.size) {
      throw new Error("position out of range");
    } else if (position === 0) {
      this.head = this.head.next;
      this.size--;
    } else {
      let node = this.getNode(position);
      let pre = this.getNode(position - 1);
      pre.next = node.next;
      this.size--;
    }
  }

  indexOf(element) {
    let current = this.head;
    for (let i = 0; i < this.size; i++) {
      if (current.element === element) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  getNode(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("out of range");
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
}

module.exports = LinkedList;
