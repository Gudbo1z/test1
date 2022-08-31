function isIncreasingNumberList(numberList){
    let condition = false
    if(numberList.length >= 2){
        for(let i = 0; i < numberList.length; i++){
            if(numberList[i] < numberList[i+1]) condition = true
        }
    }
    else console.log('wrong input')
    return condition
}

console.log(isIncreasingNumberList([2,3]))