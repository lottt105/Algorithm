function solution(topping) {
    let result = 0;
    const len = topping.length;
    if(len === 1) return result;
    
    const keys = [...new Set(topping)];
    const left = {};
    const right = {};
    keys.forEach((k) => {
        left[k] = 0;
        right[k] = 0;
    })
    left[topping[0]]++;
    topping.slice(1).forEach((t) => right[t]++);
    let l = 1;
    let r = right[topping[0]] === 0 ? keys.length-1 : keys.length;
    if(r === 1) result++;
    for(let i = 1; i < len; i++){
        const t = topping[i];
        if(left[t] === 0){
            left[t]++;
            l++;
        }
        right[t]--;
        if(right[t] === 0){
            r--;
        }
        if(l === r) result++
    }
    return result
}