const solution = (array, n) => {
    array.sort((a, b) => a - b);
    let min_num = 101
    for (let i of array) {
        if (Math.abs(i - n) < Math.abs(min_num - n)) {
            min_num = i;
        }
    }
    return min_num;
}