function solution(k, score) {
    let hall = [], result = [];

    for(let i = 0; i < score.length; i++){
        if(hall.length < k){
            hall.push(score[i]);
            result.push(Math.min(...hall));
            hall.sort((a, b) => b - a);
        } else {
            if(hall[k-1] < score[i]){
                hall.pop();
                hall.push(score[i]);
                result.push(Math.min(...hall));
                hall.sort((a, b) => b - a);
            } else result.push(result[i-1]);
        }
    }
    return result
}