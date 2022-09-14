const example = ['swift','rust','javascript','react','rx','ruby','rails','php','objective-c','html','CSS','pug']

const show = document.querySelector('#show')

function getApi(example){
    let keywords = [...example]
    if(keywords.length){
        let apis = keywords.splice(0,5).map(keyword => fetch(`https://api.github.com/search/repositories?q=${keyword}`))
        Promise.allSettled(apis)
        .then(responses => {
            responses.forEach((response, index) => {
                if(response.status === 'fulfilled'){
                    console.log(response.value.json().then(res => console.log(res.items[0])))
                }
                if(response.status === 'rejected'){
                    keywords.push(keywords[index])
                }
            })
            return keywords
        })
        .then(responses => getApi(responses))
    }
}
getApi(example)