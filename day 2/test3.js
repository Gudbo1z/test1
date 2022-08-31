function isPrime(n){
    let condition = true
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            condition = false
        }
    }
    return condition
}

console.log(isPrime(3))