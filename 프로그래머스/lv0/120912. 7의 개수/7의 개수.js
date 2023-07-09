const solution = (array) => {
    let arr = array.map(n => String(n).match(/7/g))
    return arr.reduce((a, c) => c ? a + c.length : a,0);
}