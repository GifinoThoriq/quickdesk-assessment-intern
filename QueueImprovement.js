//I improve the class with encapsulation by using private instace variable
class Queue {
    #queue;
    #pointer;
    #index;

    constructor() {
        this.#queue = [];
        this.#pointer = 0;
        this.#index = 0;
    }

    enqueue(value) {
        this.#queue[this.#index] = value;
        this.#index++;
        
        return this.getQueue();
    }

    deqeueu() {
        const value = this.#queue[this.#pointer];
        delete this.#queue[this.#pointer];
        this.#pointer++;

        return value;
    }

    getQueue() {
        return this.#queue.slice(this.#pointer, this.#index);
    }

    size() {
        return this.#index - this.#pointer
    }
}

class FIFOQUEUE extends Queue {
    constructor() {
        super();
    }
}

class LIFOQUEUE extends Queue {
    constructor() {
        super();
    }

    enqueue(value) {
        this.#queue[this.#index] = value;
        this.#index++;

        return this.getQueue();
    }

    dequeue() {
        const value = this.#queue[this.#index-1];
        delete this.#queue[this.#index-1];
        this.index--;

        return value;
    }
}


//FIFOQUEUE
const fifo = new FIFOQUEUE()

console.log("\nusing FIFO method\n")
fifo.enqueue("A123")
fifo.enqueue("A124")
let queueResult = fifo.getQueue()
console.log("first queue result : " + queueResult)
console.log("first size : " + fifo.size())
fifo.dequeue();
queueResult = fifo.getQueue()
console.log("queue result after dequeue : " + queueResult)
console.log("last size : " + fifo.size())

//test for stack class
// const stack = new Stack()

// console.log("\nusing LIFO method\n")
// stack.enqueue("A123")
// stack.enqueue("A124")
// let stackQueueResult = stack.getQueue()
// console.log("first stack result : " + stackQueueResult)
// console.log("first size : " + stack.size())
// stack.dequeue();
// stackQueueResult = stack.getQueue()
// console.log("stack result after dequeue : " + stackQueueResult)
// console.log("last size : " + stack.size())