function solution(sequence, k) {
    let answer = [0, 1000000];
    let sum = sequence[0], i = 0, j = 0;
    while(j < sequence.length){
        if(sum === k){
            if(answer[1] - answer[0] > j - i){
                answer = [i, j];   
            }
            sum -= sequence[i++];
            sum += sequence[++j];
        }
        else if(sum > k) sum -= sequence[i++];
        else if(sum < k) sum += sequence[++j];
    }
    return answer;
}