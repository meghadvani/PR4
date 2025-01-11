class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }


enqueue(el) {
    this.stack1.push(el);
}

dequeue() {
    if (this.stack2.length === 0) {
    while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
    }
}
    return this.stack2.pop();
}

isEmpty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
}

size() {
    return this.stack1.length + this.stack2.length;
}

}

let queue = new Queue();
queue.enqueue(56);
queue.enqueue(59);
queue.enqueue(14);
console.log(queue.size());
