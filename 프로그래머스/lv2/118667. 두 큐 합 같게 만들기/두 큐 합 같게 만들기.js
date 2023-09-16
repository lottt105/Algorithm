function solution(queue1, queue2) {
    const len = queue1.length * 3;
    let result = 0;
    let sum1 = queue1.reduce((a, c) => a + c, 0);
    let sum2 = queue2.reduce((a, c) => a + c, 0);
    let idx1 = 0, idx2 = 0;
    if((sum1 + sum2) % 2 !== 0) return -1;
    
    for(let i = 0; i < len; i++){
        if(sum1 === sum2) return result;
        else if(sum1 < sum2){
            const n = queue2[idx2++];
            queue1.push(n);
            sum1 += n;
            sum2 -= n;
        } else {
            const n = queue1[idx1++];
            queue2.push(n);
            sum1 -= n;
            sum2 += n;
        }
        result++;
    }
    return -1;
}