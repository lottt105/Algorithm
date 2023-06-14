const gcd = (num1, num2) => {
    const r = num1 % num2;
    if(r === 0) return num2;
    return gcd(num2, r);
} 

const solution = (numer1, denom1, numer2, denom2) => {
    let numer = (numer1 * denom2) + (numer2 * denom1);
    let denom = denom1 * denom2;
    const remainder = gcd(numer, denom);
    return [numer / remainder, denom / remainder];
}