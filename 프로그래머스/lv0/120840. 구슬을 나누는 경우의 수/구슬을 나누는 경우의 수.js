const solution = (balls, share) => {
    const factorial = (n, m) => {
        let a = BigInt(1);
        for (let i = n; i > m; i--){
            a *= BigInt(i);
        }
        return a;
    }
    
    return factorial(balls, share) / factorial(balls-share, 1);
}