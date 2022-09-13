const example = ['swift','rust','javascript','react','rx','ruby','rails','php','objective-c','html','CSS','pug']

function getApi(example){
    if(example.length){
        let keywords = example
        let apis = keywords.slice(0,5).map(keyword => fetch(`https://api.github.com/search/repositories?q=${keyword}`))
        Promise.allSettled(apis)
        .then(responses => {
            responses[0].value.json().then(response => console.log(response.items? response.items[0] : 'khong thanh cong'))
            let newKeywords = keywords
            responses.forEach(response => {
                if(response.status === 'fulfilled'){
                    let url = response.value.url
                    let key = url.slice(url.indexOf('=')+1)
                    newKeywords = newKeywords.filter(keyword => keyword !== key)
                }
            })
            return newKeywords
        })
        .then(responses => getApi(responses))
    }   
}

getApi(example)