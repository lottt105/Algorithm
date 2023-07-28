function solution(prices) {
    const result = Array.from({length:prices.length}, () => 0);
    const len = prices.length;
    for(let i = 0; i < len - 1; i++){
        let n = len - 1;
        for(let j = i+1; j < prices.length; j++){
            if(prices[i] > prices[j]){
                n = j;
                break;
            }
        }
        result[i] = n-i;
    }
    return result;
}