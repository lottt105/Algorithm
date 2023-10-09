function solution(n) {
    let answer = Array.from(new Array(n), ()=>new Array(n).fill(0))
    let temp = 0;

    const circle = (t) => {
        // 1. 아래로
        for(let i = t*2; i < n-t; i++){
            answer[i][t] = ++temp;
        }
        // 2. 오른쪽으로
        for(let j = t+1; j < n-t-t-1; j++){
            answer[n-t-1][j] = ++temp;
        }
        // 3. 위로
        for(let k = n-t-1; k > t*2; k--){
            answer[k][k-t] = ++temp;
        }
    }
    let t = 0;
    while(t < Math.ceil(n/3)){
        circle(t++);
    }
  return answer.flat().filter(n => n !== 0)
}