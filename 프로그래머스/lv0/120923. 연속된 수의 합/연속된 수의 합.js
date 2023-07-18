const solution = (num, total) => {
    // total / num 부터 연속된 num개의 수를 더한 값이
    // total 보다 작으면 1씩 +1, total 값과 같아질때까지
    let a = Math.floor(total / num);
    let sum = -1;
    while (sum !== total) {
        sum = 0;
        for(let i = 0; i < num; i++){
            sum += (a + i);
        }
        if (sum > total) a--;
    }
    
    let result = [];
    for(let i = 0; i < num; i++){
        result.push(a + i);
    }
    return result;
}