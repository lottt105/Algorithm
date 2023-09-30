function solution(d, budget) {
    // 모두 더한 값이 예산보다 적거나 같으면, d의 길이 return
    // 크다면, 총 합계에서 가장 큰 수부터 하나씩 빼며 체크
    let result = d.length;
    let sum = d.reduce((a, c) => a += c);
    d.sort((a, b) => a - b);
    while (sum > budget){
        sum -= d.pop();
        result--;
    }
    return result;
}