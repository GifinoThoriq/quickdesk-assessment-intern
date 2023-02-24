//FIFO(first item will be removed)
class Queue{
    constructor(){
        this.queue=[]
    }

    enqueue(value) {
        this.queue.push(value)
        return this.queue
    }

    dequeue(){
        return this.queue.shift()
    }

    getQueue(){
        return this.queue
    }

    size(){
        return this.queue.length
    }
}

//LIFO(last item will be removed)
class Stack{
    constructor(){
        this.queue=[]
    }

    enqueue(value) {
        this.queue.push(value)
        return this.queue
    }

    dequeue(){
        return this.queue.pop()
    }

    getQueue(){
        return this.queue
    }

    size(){
        return this.queue.length
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