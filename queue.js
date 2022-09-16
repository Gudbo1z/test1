class Queue {
    constructor(delay = 1000) {
        this.delay = delay;
        this.callbackQueue = [];
        this.result = []
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
        setTimeout(() => {
            this.callbackQueue.shift();
            if (this.callbackQueue.length > 0) {
                this.runcallback();
            }
        }, this.delay);

        // this.result.push(callback());
        return callback()
    }
}

const cb1 = () => 1;
const cb2 = () => 2;
const cb3 = () => 3;
const cb4 = () => 4;

const queue1 = new Queue(1500);
queue1.add(cb1);
queue1.add(cb2);

setTimeout(() => queue1.add(cb3), 2000);
setTimeout(() => queue1.add(cb4), 2500);

console.log(queue1.delay)