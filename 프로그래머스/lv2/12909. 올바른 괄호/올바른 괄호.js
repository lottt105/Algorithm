const solution = (s) => {
    let stack = [];
    let result = true;
    for(let a of s) {
        if (a === '(') stack.push(a);
        else {
            if(stack.pop() != '(') result = false;
        }
    }
    if(stack[0] === '(') result = false;
    return result;
}