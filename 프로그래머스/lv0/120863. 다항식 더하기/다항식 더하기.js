function solution(polynomial) {
    let arr = polynomial.split(' + ');
    let x = arr.filter(a => /x/g.test(a))
        .reduce((a, c) => c === 'x' ? ++a : a + +c.slice(0, c.length - 1), 0);
    let n = arr.filter(a => +a);
    
    if(x === 0) return '' + n.reduce((a, c) => a + +c, 0);
    else {
        x = (x === 1 ? 'x' : x + 'x');
        return (n.length === 0 ? x : x + ' + ' + n.reduce((a, c) => a + +c, 0));
    }
}