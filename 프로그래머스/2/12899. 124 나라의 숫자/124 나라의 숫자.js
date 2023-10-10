function solution(n) {
    const rule = ['4', '1', '2']
    let result = '';
    while(n){
        result = rule[n % 3] + result;
        n = Math.floor((n-1) / 3);
    }
    return result; 
}