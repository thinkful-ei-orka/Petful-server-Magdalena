class _Node {
  constructor(data, next, previous) {
    this.data = data;
    this.next = next;
    this.previous = previous;
  }
}

class Queue {
  constructor() {
    // Set initial data.
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    // Add some data to the queue.
    const node = new _Node(data, null);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    // Remove some data from the queue.
    if (this.first === null) {
      return;
    }

    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.data;
  }

  show() {
    // Return the next item in the queue.
    return this.first;
  }

  all() {
    // Return all items in the queue.
    let current = this.first;
    let newArray = [];
    while (current) {
      newArray.push(current.data);
      current = current.next;
    }
    return newArray.join(', ');
  }
}

module.exports = Queue
