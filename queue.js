class Queue {
    constructor (delay = 1000) {
        this.delay = delay
        this.callbackQueue = []
    }
    add(callback){
        callback(); // callback se luon thuc hien
        if(this.callbackQueue.length) { // neu callbackQueue ton tai
            let cb = this.callbackQueue.splice(0,1)
            console.log('-------')
            setTimeout(() => this.add(cb[0]), this.delay)
        }
    }
}
let test = new Queue
test.add(()=>console.log('xin chao'))

// {setTimeout(()=>console.log('xin chao1'), 2000)}