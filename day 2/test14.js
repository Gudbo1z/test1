function countNumberNotInB(a, b){
    const concatArrays = [...a, ...b]
    const set = new Set([...concatArrays])
    return (a.length - (concatArrays.length - set.size))
}

console.log(countNumberNotInB([1,2,3], [1,2,3]))