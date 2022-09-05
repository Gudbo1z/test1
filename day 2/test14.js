function countNumberNotInB(a, b){
    const set = new Set([...a, ...b])
    return (a.length - (concatArrays.length - set.size))
}

console.log(countNumberNotInB([1,2,3], [1,2,3]))