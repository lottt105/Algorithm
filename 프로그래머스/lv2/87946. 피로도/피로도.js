function solution(k, dungeons) {
    const dfs = (k, dungeons, prev) => {
        for(let i = 0; i < dungeons.length; i++) {
            const [req, use] = dungeons[i];
            if(!req || req > k) continue;
            const copy = [...dungeons];
            // 현재 던전은 탐색했으니 넘어가라는걸 알려주기 위함
            copy[i] = [null, null];
            dfs(k-use, copy, prev + 1);
        }
        answer = Math.max(prev, answer);
    }
    
    let answer = 0;
    dfs(k, dungeons, 0);
    return answer;
}