function solution(n) {
    const answer = [];
    const hanoi = (n, from, to, sub) => {
        if(n === 1) {
            answer.push([from, to])
            return;
        } else {
            hanoi(n-1, from, sub, to);
            answer.push([from, to]);
            hanoi(n-1, sub, to, from);
        }
    }
    hanoi(n, 1, 3, 2);
    return answer;
}