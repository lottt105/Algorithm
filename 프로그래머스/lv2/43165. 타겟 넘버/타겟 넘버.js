function solution(numbers, target) {
    const combination = (combi, rests) => {
        combis.push(combi)
        if(rests.length === 0) return;
        rests.forEach((v, i) => {
            const rest = rests.slice(i+1);
            combination([...combi, v], rest);
        })
    }
    const combis = [];
    combination([], [...numbers])
    const total_sum = numbers.reduce((a, c) => a + c, 0);
    let result = 0;
    for(let c of combis){
        const sum = c ? c.reduce((a, c) => a + c, 0) : 0;
        if(total_sum - (sum * 2) === target) result++;
    }
    return result;
}