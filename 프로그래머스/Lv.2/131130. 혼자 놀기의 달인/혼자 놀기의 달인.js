function solution(cards) {
    const result = [];
    cards.forEach((v, i) => {
        let nextIdx = v - 1;
        if(v !== 0){
            let cnt = 0;
            while(cards[nextIdx] && cnt <= cards.length){
                let temp = cards[nextIdx] - 1 
                cards[nextIdx] = 0;
                nextIdx = temp;
                cnt += 1;
            }
            result.push(cnt);
        }
    });
    if(result.length === 1) return 0;
    result.sort((a, b) => b - a);
    return result[0] * result[1];
}