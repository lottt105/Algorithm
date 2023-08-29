function solution(n) {
    // 피보나치
    const fibo = [0n, 1n, 2n]
    for(let i = 3; i <= n; i++){
        fibo.push(fibo[i-1] + fibo[i-2])
    }
    return fibo[n] % 1234567n
}