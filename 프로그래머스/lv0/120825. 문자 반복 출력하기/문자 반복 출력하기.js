const solution = (my_string, n) => {
    let str = "";
    for (let s of my_string) str += s.repeat(n);
    return str;
    
}