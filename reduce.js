Array.prototype.reduceCus = function(callback, initialValue){
    let previous = this[0]
    let current = this[1]
    let length = this.length - 1
    for(let i = 0; i < length; i++){
        if(i == 0){ // trong lan chay dau tien 
            //neu khong khoi tao init thi khong can thay doi arguments cua callback
            if(initialValue){// neu co khoi tao init
                previous = initialValue
                current = this[0] // 0
                length +=1
            }
            previous = callback(previous, current)
        }
        else{ // trong cac lan chay sau
            // neu co init thi current = this[i], neu khong thi current = this[i+1]
            current == this[0]? previous = callback(previous, this[i]) : previous = callback(previous, this[i+1])
        }
    }
    return previous
}
console.log([3,4,5].reduceCus((a,b)=>a+b))
console.log([3,4,5].reduce((a,b)=>a+b,2))

// if(current == this[0]){
//     previous = callback(previous, this[i])
// }
// else previous = callback(previous, this[i])