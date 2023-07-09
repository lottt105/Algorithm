const solution = (n) => {
    let i = 1;
    while(n > i ** 2) {
        i++;
    }
    return n === i ** 2 ? 1 : 2;
}