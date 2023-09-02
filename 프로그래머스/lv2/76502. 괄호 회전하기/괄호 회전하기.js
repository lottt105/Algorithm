function solution(s) {
    const len = s.length;
    const br = {
        ')' : '(',
        ']' : '[',
        '}' : '{',
    }
    const idValid = (s) => {
        const stack = [];
        for(let j = 0; j < len; j++){
            if (s[j]==='(' || s[j]==='[' || s[j]==='{') {
                stack.push(s[j]);
            } else if (s[j]===')' || s[j]===']' || s[j]==='}') {
                if (stack.pop() !== br[s[j]]) {
                    return false;
                }
            }
        }
        return stack.length === 0 ? true : false;
    }

    let result = 0;
    s = s.concat(s);
    for(let i = 0; i < len; i++){
        if (idValid(s.slice(i, i+len))) result++;
    }
    return result
}