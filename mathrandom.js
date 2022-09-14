let randomNumber = parseInt(Math.random()*100)

function handlepromise(count){
    if(count < 5){
        let promise = new Promise((resolve, reject)=>{
            if(randomNumber % 2 === 0) resolve('fulfilled')
            else {
                reject('reject')
            }
        })
        promise
        .then(res => console.log(res))
        .catch(res => {
            let limit = count + 1
            console.log(limit, res)
            handlepromise(limit)
        })
    }
}

handlepromise(0)