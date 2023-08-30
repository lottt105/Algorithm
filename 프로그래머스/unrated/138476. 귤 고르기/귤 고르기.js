function solution(k, tangerine) {
    let memo = {};
    for (let i = 0; i < tangerine.length; i++){
        const v = tangerine[i];
        memo[v] ? memo[v]+=1 : memo[v] = 1;
    }
    const memo_arr = Object.entries(memo).map(([key,value])=>({key,value}))
    memo_arr.sort((a, b) => b.value - a.value);
    let cur = 0;
    let result = 0;
    for(let v of memo_arr){
        cur += v.value;
        result++;
        if(cur >= k) break;
    }
    
    return result;
}