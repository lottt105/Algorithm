function solution(N, number) {
    if(N === number) return 1;
    
    let isAnswer = false, count = 2;
    const nums = { 1:[N] };
    
    while(count <= 8){
        nums[count] = [+`${nums[count-1][0]}${N}`];
        for(let c = 1; c <= Math.ceil(count / 2); c++){
            const prevCountArr = nums[count-c];
            for(let i = 0; i < prevCountArr.length; i++){
                const curNum = prevCountArr[i];
                const preCountArr2 = nums[c]
                for(let j = 0; j < preCountArr2.length; j++){
                    const curNum2 = preCountArr2[j];
                    const curAddArr = [
                        curNum + curNum2, 
                        curNum - curNum2, 
                        Math.floor(curNum / curNum2), 
                        curNum * curNum2
                    ];
                    nums[count].push(...curAddArr);
                }
                nums[count].includes(number) ? isAnswer = true: "";
                if(isAnswer) break;
            }
        } 
        if(isAnswer) break;
        nums[count] = [...new Set(nums[count])];
        count += 1;
    }
    return isAnswer ? count : -1;
}