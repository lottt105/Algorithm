const solution = (s) => {
    const stack = [0, s[0]];
    for(let i = 1; i < s.length; i++){
        const prev = stack.pop();
        if(prev !== s[i]) stack.push(prev, s[i]);
        // console.log(s[i], stack)
    }
    return stack.length === 1 ? 1: 0;
}