function solution(common) {
    let result = 0;
    if(common[1] - common[0] === common[2] - common[1]) {
        result = common.pop() + (common[1] - common[0]);
    }
    else if(common[1] / common[0] === common[2] / common[1]) {
        result = common.pop() * (common[1] / common[0]);
    }
    return result;
}