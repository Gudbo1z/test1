function isSymetricList(numberList){
    let condition = true
    for(let  i = 0; i < numberList.length; i++){
        if(numberList[i] != numberList[numberList.length -1 - i]){
            condition = false
        }
    }
    return condition
}

console.log(isSymetricList([1, 2, 1]))