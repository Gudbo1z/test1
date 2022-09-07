Array.prototype.sortCus = function(callback){
    let array = [...this]
    let result = []
    if(callback){
        console.log('check 1')
        for(let i = 0; i < array.length; i++){
            let min = array[i]
            let index = 0
            for(let j = 0; j < array.length; j++){
                if(callback(min, array[j]) > 0){
                    min = array[j]
                    index = j
                }
            }
            array.splice(index, 1)
            i -= 1
            result = [...result, min]
        }
    }
    else {
        console.log('check 2')
        for(let i = 0; i < array.length; i++){
            let min = array[i].toString()
            let index = 0
            for(let j = 0; j < array.length; j++){
                if(min > array[j].toString()){
                    min = array[j].toString()
                    index = j
                }
            }
            array.splice(index, 1)
            i -= 1
            result = [...result, parseInt(min)]
        }
    }
    return result
}
console.log([8,8,2,1,9,4,5,11111].sortCus())
console.log([8,8,2,1,9,4,5,11111].sort())