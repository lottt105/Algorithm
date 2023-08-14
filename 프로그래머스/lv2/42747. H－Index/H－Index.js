function solution(citations) {
    citations.sort((a, b) => b - a);
    let h = 0;
    console.log(citations)
    for(let i = 0; i < citations.length; i++){
        if(citations[i] >= i+1) {
            h = i+1;
        }
    }
    return h;
}