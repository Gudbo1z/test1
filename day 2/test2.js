function isIncreasingNumberByDistance(n, x){
    let convertToString = n.toString()
    let condition = true
    for(let i = 0; i < convertToString.length; i++){
        if(convertToString[i+1] && convertToString[i+1] - convertToString[i] != x){
            condition = false
        }
    }
    return condition
}

console.log(isIncreasingNumberByDistance(135, 1))