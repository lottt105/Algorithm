const solution = (array, n) => {
    array.sort((a, b) => a - b);
    let abs_arr = array.map(a => Math.abs(a - n))
    return array[abs_arr.indexOf(Math.min(...abs_arr))];
}