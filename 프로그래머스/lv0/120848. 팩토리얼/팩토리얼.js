function solution(n) {
    let result = 1;
    let i = 1;
    while(result * i <= n) {
        result *= i;
        i++;
    }
    return i-1;
}