function solution(arr) {
    let zero = 0;
    let one = 0;
    function quad(i1, j1, i2, j2){
        if(i2-i1 === 1 && j2-j1 === 1){
            arr[i1][j1] === 1 ? one++ : zero++;
            return arr[i1][j1];
        }
        const b1 = quad(i1, j1, (i1+i2)/2, (j1+j2)/2);
        const b2 = quad(i1, (j1+j2)/2, (i1+i2)/2, j2);
        const b3 = quad((i1+i2)/2, j1, i2, (j1+j2)/2);
        const b4 = quad((i1+i2)/2, (j1+j2)/2, i2, j2);
        const total = b1 + b2 + b3 + b4;
        if(b1 < 2 || b1 % 4 === 0){
            if(b1 === b2 && b1 === b3 && b1 === b4){
                total === 0 ? zero -= 3 : one -= 3;
                return total;
            }
        }
        return +`${b1}+${b2}+${b3}+${b4}`;
    }
    quad(0, 0, arr.length, arr.length)
    return [zero, one]
}