function solution(order) {
    const stack = []; //서브 컨테이너
    let box = 1; // 현재 상자 번호
    let result = 0;
    for(let i = 0; i < order.length; i++){
        if(order[i] === box){
            result++;
            box++;
        } else if(order[i] === stack[stack.length-1]){
            stack.pop();
            result++;
        } else {
            while(order[i] !== box){
                if(box > order.length) return result;
                stack.push(box);
                box++;
            }
            result++;
            box++;
        }
    }
    return result;
}