function solution(n, left, right) {
    const left_v = Math.floor(left / n);
    const right_v = Math.floor(right / n);
    const arr = [];
    console.log(left_v, right_v)
    for(let i = left_v; i <= right_v; i++){
        for(let j = 0; j < n; j++){
            j <= i ? arr.push(i+1) : arr.push(j+1);
        }
    }
    return arr.slice(left % n, (left % n) + (right - left + 1));
}