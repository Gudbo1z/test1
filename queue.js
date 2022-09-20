class Queue {
    constructor(delay = 10000) {
        this.delay = delay;
        this.callbackQueue = [];
    }

    add(callback) {
        if (this.callbackQueue.length === 0) { 
            this.callbackQueue.push(callback);
            return this.runcallback();
        } else {
            this.callbackQueue.push(callback);
        }
    }

    runcallback() {
        const callback = this.callbackQueue[0];
        this.callbackQueue.shift();
        if (this.callbackQueue.length > 0) {
            let callback1 = this.callbackQueue[0]
            return new Promise((res, rej) => {
                setTimeout(()=>{
                    res(callback1())
                }, this.delay)
            });
        }
        return new Promise((res, rej) => res(callback()))
    }
}

const cb1 = () => 1;
const cb2 = () => 2;
const cb3 = () => 3;
const cb4 = () => 4;

const queue1 = new Queue(1000);
let test1 = queue1.add(cb1);
let test2 = queue1.add(cb2);
let test3 = queue1.add(cb3);
console.log(test1)
console.log(test2)
console.log(test3)