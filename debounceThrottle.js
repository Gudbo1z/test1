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
    console.log(1)
    let lastRun = delay;
    return () => {
        const now = new Date().getTime();
        if(now - lastRun >= delay){
            lastRun = now;
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