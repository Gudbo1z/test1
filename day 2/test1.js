function isIncreasingNumber(n){
    if(n >= 10){
        let convertToString = n.toString()
        let condition = true
        for(let i = 0; i < convertToString.length; i++){
            if(convertToString[i+1] && convertToString[i] > convertToString[i+1]) condition = false
        }
        return condition
    }
    else console.log('wrong input')
}

console.log(isIncreasingNumber(125))
