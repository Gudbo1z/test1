function isSymetricNumber(n){
    let convertToString = n.toString()
    let condition = true
    for(let  i = 0; i < convertToString.length; i++){
        if(convertToString[i] != convertToString[convertToString.length -1 - i]){
            condition = false
        }
    }
    return condition
}

console.log(isSymetricNumber(1))