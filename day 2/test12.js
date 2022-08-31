function findSecondLargestNumber(numberList){
    let max = numberList[0];
    let secondLargest = 0;
    for(let i = 0; i < numberList.length; i++){
        if(numberList[i] > max){
            secondLargest = max
            max = numberList[i]
        }
        if(numberList[i] < max && numberList[i] > secondLargest){
            secondLargest = numberList[i]
        }
    }
    return secondLargest
}

console.log(findSecondLargestNumber([100, 1, 2, 3]))