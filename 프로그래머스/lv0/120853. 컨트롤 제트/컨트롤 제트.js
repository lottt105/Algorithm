const solution = (s) => {
    let s_arr = s.split(' ');
    let prev = 0;
    let sum = 0;
    for(let i of s_arr){
        if (i === 'Z') {
            sum -= prev;
        }
        else {
            prev = Number(i);
            sum += prev;
        }
    }
    return sum;
}