function solution(numbers) {
    const len = numbers.length;
    let answer = new Array(len).fill(-1);
    let stack = [numbers[len-1]];
    for(let n = len - 2; n > -1; n--){
        while(stack && numbers[n] >= stack.at(-1)){
            stack.pop()
        } 
        if(stack.length > 0) {
            answer[n] = stack.at(-1);
        }
        stack.push(numbers[n])
    }
    return answer;
}