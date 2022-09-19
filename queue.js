class Queue {
    constructor(delay = 1000) {
        this.delay = delay;
        this.callbackQueue = [];
        this.result = []
        this.done = false
    }

    add(callback) {
        if (this.callbackQueue.length === 0) { 
            this.callbackQueue.push(callback);
            return this.runcallback();
        } else {
            this.callbackQueue.push(callback);
        }
    }

    getResult() {
        if(this.done) return this.result
        setTimeout(()=>{
            this.getResult()
        }, this.delay)
    }

    runcallback() {
        const callback = this.callbackQueue[0];
        setTimeout(() => {
            this.callbackQueue.shift();
            if (this.callbackQueue.length > 0) {
                this.runcallback();
            }
            if (this.callbackQueue.length === 0) {
                this.done = true;
            }
        }, this.delay);

        this.result.push(callback());
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
// const c = setTimeout(() => queue1.add(cb3), 5000)
// setTimeout(() => queue1.add(cb4), 1000)

// console.log(c)
// setTimeout(()=>console.log(queue1.getResult()), 7000)
// console.log(queue1.getResult())
let test = ()=>queue1.getResult()
// function test(name){
//     console.log('xin chao '+name)
// }
// (()=>{
//     test('hoang anh')
// })();
// (()=>console.log('xin chao 2'))()