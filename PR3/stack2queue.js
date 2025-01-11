class Stack {
    constructor() {
        this.queue1 = [];  
        this.queue2 = [];  
    }

    
    push(el) {
        
        this.queue2.push(el);

        
        while (this.queue1.length > 0) {
            this.queue2.push(this.queue1.shift());
        }
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }

   
    pop() {
        if (this.empty()) {
            return "Stack is Empty!";
        }
        return this.queue1.shift();  
    }

    
    top() {
        if (this.empty()) {
            return "Stack is Empty!";
        }
        return this.queue1[0];  
    }

    
    empty() {
        return this.queue1.length === 0;
    }
}

let stack = new Stack();

stack.push(9);
stack.push(8);
stack.push(7);
console.log(stack.top());
