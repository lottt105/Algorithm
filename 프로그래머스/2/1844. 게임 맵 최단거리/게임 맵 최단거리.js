function solution(maps) {
    const rowLen = maps.length, colLen = maps[0].length;
    const checkMap = [...maps.map(row => [...row])];

    const queue = [[0, 0, 1]];
    while(queue.length) {
        const [n, m, val] = queue.shift();
        if(n+1 === rowLen && m+1 === colLen) return val;
        if(checkMap[n][m] === 0) continue;
        checkMap[n][m] = 0;
        
        // 하
        if(n+1 < rowLen && checkMap[n+1][m] === 1) queue.push([n+1, m, val+1]);
        // 우
        if(m+1 < colLen && checkMap[n][m+1] === 1) queue.push([n, m+1, val+1]);
        // 상
        if(n-1 >= 0 && checkMap[n-1][m] === 1) queue.push([n-1, m, val+1]);
        // 좌
        if(m-1 >= 0 && checkMap[n][m-1] === 1) queue.push([n, m-1, val+1]);
    }
    
    return -1;
}