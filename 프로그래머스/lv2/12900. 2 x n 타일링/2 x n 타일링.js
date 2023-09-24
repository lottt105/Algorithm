function solution(n) {
    let pibo = new Array(n+1).fill(0);
    if(n <= 3) return n;
    pibo[1] = 1;
    pibo[2] = 2;
    for(let i = 3; i <= n; i++){
        pibo[i] = (pibo[i-2] + pibo[i-1]) % 1000000007
    }
    return pibo[n] 
}