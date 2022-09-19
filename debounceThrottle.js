const input = document.querySelector('#input')
const debounce = document.querySelector('#debounce > h1')
const throttle = document.querySelector('#throttle > h1')
input.addEventListener('input', () => handle(2000))

let clearTimer

function callbackDebounce(cb, delay){
    cb
    clearInterval(clearTimer)
    clearTimer = setTimeout(cb, delay) 
}

function callbackThrottle(cb, delay){
    let now = 0;
    return() => {  
        const time = new Date().getTime();
        if(time - now >= delay){
            now = time;
            cb;
        }
    }
} 

function handle(delay){
    // debounce
    callbackDebounce(()=>debounce.innerHTML = input.value, delay)
    // throttle
    callbackThrottle(()=>throttle.innerHTML = input.value, delay) 
}