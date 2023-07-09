function solution(my_str, n) {
    let len = my_str.length;
    let result = [];
    for(let i = 0; i< Math.floor(len/n); i++){
        result.push(my_str.slice(i*n, i*n+n));
    }
    len % n !== 0 ? result.push(my_str.slice(len - (len % n))) : '';
    return result;
}