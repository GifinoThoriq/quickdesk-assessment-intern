//FIFO(first item will be removed)
class Queue{
    constructor() {
        this.queue = {};
        this.pointer = 0;
        this.index = 0;
    }
    
    enqueue(value) {
        this.queue[this.index] = value;
        this.index++;
        return this.getQueue();
    }
    
    dequeue(){
        if (this.pointer === this.index) {
          return undefined;
        }
        const value = this.queue[this.pointer];
        delete this.queue[this.pointer];
        this.pointer++;
        return value;
    }
    
    getQueue(){
        const queue = [];
        for (let i = this.pointer; i < this.index; i++) {
          queue.push(this.queue[i]);
        }
        return queue;
    }
    
    size(){
        return this.index - this.pointer;
    }
}

//LIFO(last item will be removed)
class Stack{
    constructor() {
        this.queue = {};
        this.index = 0;
    }
    
    enqueue(value) {
        this.queue[this.index] = value;
        this.index++;
        return this.getQueue();
    }
    
    dequeue(){
        const value = this.queue[this.index];
        delete this.queue[this.index];
        this.index--;
        return value;
    }
    
    getQueue(){
        const queue = [];
        for (let i = 0; i < this.index; i++) {
          queue.push(this.queue[i]);
        }
        return queue;
    }
    
    size(){
        return this.index;
    }
}


//test for Queue Class
const queue = new Queue()

console.log("\nusing FIFO method\n")
queue.enqueue("A123")
queue.enqueue("A124")
let queueResult = queue.getQueue()
console.log("first queue result : " + queueResult)
console.log("first size : " + queue.size())
queue.dequeue();
queueResult = queue.getQueue()
console.log("queue result after dequeue : " + queueResult)
console.log("last size : " + queue.size())

//test for stack class
const stack = new Stack()

console.log("\nusing LIFO method\n")
stack.enqueue("A123")
stack.enqueue("A124")
let stackQueueResult = stack.getQueue()
console.log("first stack result : " + stackQueueResult)
console.log("first size : " + stack.size())
stack.dequeue();
stackQueueResult = stack.getQueue()
console.log("stack result after dequeue : " + stackQueueResult)
console.log("last size : " + stack.size())