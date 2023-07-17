function solution(i, j, k) {
    let result = 0
    const regExp = new RegExp(`${k}`);
    for(let n = i; n <= j; n++) {
        [...String(n)].forEach(a => regExp.test(a) ? result++ : '');
    }
    return result;
}