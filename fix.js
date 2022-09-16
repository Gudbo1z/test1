const array = []
for(let i = 1; i < 50; i++){
    array.push(i)
}
  
  function run() {
    const keywords = array.splice(0, 10);
    if (keywords.length <= 0) {
      return;
    }
    const promises = keywords.map((item) =>
      fetch("https://dummyjson.com/products/" + item)
    );
    Promise.allSettled(promises)
      .then((responses) => {
        let fulfilled = []
        responses.forEach((res, index) => {
          if (res.status === "fulfilled" && res.value.status === 200) {
            fulfilled.push(res)
          } else {
            array.push(keywords[index]);
          }
        });
        return fulfilled
      })
      .then((fulfilled) => {
        fulfilled.forEach(ful => {
          ful.value.json().then(res => console.log(res.title))
        })
      })
      .then(() => run(array));
  }
  
  run();