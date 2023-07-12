function solution(n) {
    let num3 = [];
    let i = 1;
    while(i - num3.length != n){
        ++i;
        /3/g.test(String(i)) ? num3.push(i) : '';
        if (i % 3 === 0 && num3.indexOf(i) === -1) {
            num3.push(i); 
        } 
    }
    return i;
}