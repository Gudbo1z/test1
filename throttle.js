function throttled(callback, delay) {
    console.log(1);
    let lastRun = delay;
    console.log(2)
    return () => {
        const now = new Date().getTime();
        if(now - lastRun >= delay){
            lastRun = now;
            callback();
        }
    }
}

const input = document.getElementById('input')
input.addEventListener("input", throttled(()=>console.log(input.value), 1000))