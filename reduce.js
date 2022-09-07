Array.prototype.reduceCus = function(callback, initialValue){
    for(let i = 0; i < this.length; i++){
        initialValue =  callback(initialValue || this[0], initialValue? this[0]:this[i+1])
    }
    return initialValue
}

console.log([1,2,3].reduceCus((pre, cur) => pre + cur))