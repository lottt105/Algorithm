function solution(n, computers) {
    const dfs = (computer) => {
        let cnt = 1;
        computers[computer].forEach((connect, i) => {
            if(connect === 1){
                computers[computer][i] = 0;
                computers[i][computer] = 0;
                cnt += dfs(i);
            }
        });
        return cnt;
    }
    
    let result = 0;
    for(let i = 0; i < n; i++){
        const count = dfs(i);
        if(count > 1) result += 1;
    }
    return result;
}