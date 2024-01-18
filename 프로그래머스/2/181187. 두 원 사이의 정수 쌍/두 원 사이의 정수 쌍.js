function solution(r1, r2) {
    let result = 0;
    const pow_r1 = r1 ** 2, pow_r2 = r2 ** 2;
    for(let x = 1; x <= r2; x++){
        const y2 = Math.sqrt(pow_r2 - (x ** 2));
        const y1 = (x >= r1 ? 0 : Math.sqrt(pow_r1 - (x ** 2)));
        result += (Math.floor(y2) - Math.ceil(y1) + 1);
    }
    
    return result * 4;
}