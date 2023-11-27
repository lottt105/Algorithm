function solution(p) {
    const bracket = { '(' : ')', ')' : '(' };
    
    function check(u){
        if (u[0] === ')') return false;
        
        const stack = [];
        for(let i = 0; i < u.length; i++){
            if(stack && stack[stack.length-1] === bracket[u[i]]){
                if(u[i] === '(') return false;
                stack.pop();
                continue;
            }
            stack.push(u[i]);
        }
        return true;
    }
    
    function split_p(w) {
        if(w === "") return "";
        
        let result = '';
        const u = { '(' : 0, ')' : 0, 'str' : "" };
        let v = "";
        
        for(let i = 0; i < w.length; i++) {
            if(w[i] === ')') u[')'] += 1;
            else if(w[i] === '(') u['('] += 1;
            u.str += w[i];

            if(u['('] === u[')']) {
                v = w.slice(i+1);
                break;
            }
        }
        if(check(u.str)) {
            result += u.str;
            result += split_p(v);
        } else {
            result += '(' + split_p(v) + ')';
            u.str = u.str.slice(1, u.str.length - 1);
            result += [...u.str].map(s => bracket[s]).join('');
        }
        return result;
    }
    return split_p(p);
}