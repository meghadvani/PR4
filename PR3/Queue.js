class Queue{
    constructor(){
        this.stack1 = [];
    }

    Enqueue(element){
        this.stack1.push(element);
    }


    Dequeue(){
        if(this.isEmpty()){
            console.log("Queue is Empty!!");
            return;
        }
        return this.stack1.shift();
    }

    Front(){
        if(this.isEmpty()){
            console.log("Queue is Empty!!");
            return;
        }
        return this.stack1[0];
    }

    isEmpty(){
        return this.stack1.length === 0;
    }

    Size(){
        return this.stack1.length;
    }

    Display(){
        if(this.isEmpty()){
            console.log("Queue is Empty!!...");
            return;
        }
        console.log(this.stack1.toString());
    }
}


let queue = new Queue();

queue.Enqueue(19);
queue.Enqueue(29);
queue.Enqueue(39);
queue.Dequeue();
queue.Size();
queue.Display();

