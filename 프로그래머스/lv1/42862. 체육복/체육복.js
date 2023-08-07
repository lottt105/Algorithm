function solution(n, lost, reserve) {
    lost.sort();
    reserve.sort();
    const set_reserve = new Set(reserve);
    for(let i in lost) {
        if(set_reserve.has(lost[i])){
            reserve.splice(reserve.indexOf(lost[i]), 1);
            lost.splice(i, 1, -1);
        }
    }
    
    for(let r of reserve) {
        const set_lost = new Set(lost);
        if(set_lost.has(r-1)) {
            lost.splice(lost.indexOf(r-1), 1);
            console.log('-', r-1, lost)
        }
        else if(set_lost.has(r+1)) {
            lost.splice(lost.indexOf(r+1), 1);
            console.log('+', r+1, lost)
        }
    }
    return n - lost.filter(l => l !== -1).length;
}