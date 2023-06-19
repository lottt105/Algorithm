const solution = (n) => {
    let a = 1;
    let b = n;
    let answer = 0;
    if (n === 1) return 1;
    while (a < b) {
        if (n % a === 0) {
            answer++;
            b = n / a;
        }
        a++;
    }
    
    if (a-1 === b) return (answer - 1) * 2 + 1;
    return answer * 2;
}