class Queue {
    constructor (delay = 1000) {
        this.delay = delay
    }
    add(callback, callback1, callback2){
        callback()
        Object.values(arguments).forEach((argument, index) => {
            if(index > 0)setTimeout(argument, this.delay*(index))
        });
    }
}

let test = new Queue
test.add(()=>console.log('tao dung'), ()=>console.log('tao dung 1'), ()=>console.log('tao dung 2'))