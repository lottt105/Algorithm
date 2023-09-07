function solution(s) {
    const result = [];
    let s_arr = s.slice(0, s.length-2).split('}');
    s_arr = s_arr.map(a => a = a.slice(2,a.length).split(','));
    s_arr.sort((a, b) => a.length - b.length);
    
    for(let set of s_arr) {
        for(let s of set) {
            if(!result.includes(s)){
                result.push(s);
                break;
            }
        }
    }
    
    return result.map(r => Number(r));
}