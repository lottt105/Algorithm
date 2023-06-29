const solution = (numbers, k) => {
    let k_num = (k-1) * 2;
    return numbers[k_num % numbers.length];
}