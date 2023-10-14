function solution(n, k) {
    let nums = Array.from({length:n}, (v, i) => i+1);
    const answer = [];
    const facto = [0, 1, 2];
    const cnt = k;
    
    const factorial = num => {
        if(facto[num]) return facto[num];
        for(let i = 3; i <= num; i++){
            facto[i] = facto[i] ? facto[i] : factorial(i-1) * i;
        }
        return facto[num];
    }
    /*
    12345
    12354
    12435
    12453
    12534
    12543
    
    13245
    13254
    13425
    13452
    13524
    13542
    */
    
    const get_num = () => {
        const f = factorial(nums.length-1)
        let num = nums[Math.ceil(k / f)-1];
        nums.splice(Math.ceil(k / f)-1, 1);
        answer.push(num);
        k = k <= f ? k : (k-1) % f + 1;
        return num;
    }
    //각 자리마다 get_num함수 실행
    while(answer.length < n-1){
        const num = get_num();
    }
    answer.push(nums[0])
    return answer
}