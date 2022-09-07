Array.prototype.flatCus = function(depth){
    let array = []
    let subtract = (depth == 0 || depth)? depth : 1
    for(let i = 0; i < this.length; i++){
        if(this[i].length && subtract > 0) {
            subtract -= 1
            array = [...array, ...this[i].flatCus(subtract)]
        }
        else {
            array = [...array, this[i]]
        }
    }
    return array
}

console.log([1, 2, [3, [4]]].flatCus(2))
// console.log([3,[4]].flatCus(-1))