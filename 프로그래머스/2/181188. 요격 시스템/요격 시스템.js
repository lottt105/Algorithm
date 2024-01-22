function solution(targets) {
    let end = 0, count = 0;
    
    targets.sort((a, b) => a[1] - b[1]);
    targets.forEach(([s, e]) => {
        if(end <= s){
            end = e;
            count += 1;
        }
    });
    return count;
}