const example = ['swift','rust','javascript','react','rx','ruby','rails','php','objective-c','html','CSS','pug']

const show = document.querySelector('#show')

function getApi(example){
    // if(example.length){
    //     let keywords = example
    //     let apis = keywords.slice(0,5).map(keyword => fetch(`https://api.github.com/search/repositories?q=${keyword}`))
    //     Promise.allSettled(apis)
    //     .then(responses => {
    //         responses[0].value.json().then(response => console.log(response.items? response.items[0] : 'khong thanh cong'))
    //         let newKeywords = keywords
    //         responses.forEach(response => {
    //             if(response.status === 'fulfilled'){
    //                 let url = response.value.url
    //                 let key = url.slice(url.indexOf('=')+1)
    //                 newKeywords = newKeywords.filter(keyword => keyword !== key)
    //             }
    //         })
    //         return newKeywords
    //     })
    //     .then(responses => getApi(responses))
    // }
    let failRequest = []
    for(let i = 0; i < example.length; i+=5){
        let keywords = example
        let apis = keywords.slice(i,i+5).map(keyword => fetch(`https://api.github.com/search/repositories?q=${keyword}`))
        Promise.allSettled(apis)
        .then(responses => {
            responses.forEach(response => {
                if(response.status === 'fulfilled' && !response.value.ok){ // neu thanh cong thi bo ra khoi mang
                    console.log(responses[0].value.ok? responses[0].value.json().items[0] : 'request gia tri dau tien khong thanh cong')
                    let url = response.value.url
                    let key = url.slice(url.indexOf('=')+1)
                    show.innerHTML = show.innerHTML + ' ' + key
                    keywords.splice(keywords.indexOf(key), key.length)
                }
            })
        })
        .catch(error => console.error(error))
    }
    console.log(failRequest)
    // ALERT!!!!!! sử dụng comment dưới nếu muốn thay máy
    // getApi(failRequest)
}
getApi(example)