Array.prototype.reduceCus = function(callback, initialValue){
    for(let i = 0; i < this.length-1; i++){
        initialValue =  callback(initialValue || this[0], initialValue? initialValue? this[0] : this[i+1] : this[i+1])
    }
    return initialValue
}

console.log([1,1,1].reduceCus((pre, cur) => pre * cur))

// doi so thu 2: neu khong co initialValue thi lay so thu 2
// neu co innitialValue thi lan dau lay so thu 1