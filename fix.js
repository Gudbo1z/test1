const array = []
for(let i = 1; i < 13; i++){
    array.push(i)
}
  
  function run() {
    const keywords = array.splice(0, 7);
    if (keywords.length <= 0) {
      return;
    }
    const promises = keywords.map((item) =>
      fetch("https://dummyjson.com/products/" + item)
    );
    Promise.allSettled(promises)
      .then((responses) => {
        responses.forEach((res, index) => {
          if (res.status === "fulfilled" && res.value.status === 200) {
            res.value.json().then(res => console.log(res.title));
          } else {
            array.push(keywords[index]);
          }
        });
        return array
      })
      .then((rejected) => run(rejected));
  }
  
  run();