const solution = (A, B) => {
    let count = 0;
    let arr_A = [...A]
    for (let i = 0; i < A.length;  i++) {
        if (arr_A.join('') === B) return count;
        else { 
            let f = arr_A.pop();
            arr_A.unshift(f);
            count++;
        }
    }
    return -1;
}