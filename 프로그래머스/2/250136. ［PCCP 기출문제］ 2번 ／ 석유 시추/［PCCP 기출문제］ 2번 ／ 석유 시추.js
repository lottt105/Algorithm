function solution(land) { 
    let end = 0;
    const rLen = land.length, cLen = land[0].length;
    
    function findOil(i, j){
        let cnt = 0, queue = [], nextI = i, nextJ = j;
        land[nextI][nextJ] = 0;
        queue.push([nextI, nextJ]);
        
        while(queue.length){
            [nextI, nextJ] = queue.shift();
            cnt += 1;
            if(nextJ > end) end = nextJ;
            
            if(nextJ < cLen - 1 && land[nextI][nextJ+1]) {
                land[nextI][nextJ+1] = 0;
                queue.push([nextI, nextJ+1]);
            }
            if(nextJ > 0 && land[nextI][nextJ-1]) {
                land[nextI][nextJ-1] = 0;
                queue.push([nextI, nextJ-1]);
            }
            if(nextI < rLen - 1 && land[nextI+1][nextJ]) {
                land[nextI+1][nextJ] = 0;
                queue.push([nextI+1, nextJ])
            }
            if(nextI > 0 && land[nextI-1][nextJ]) {
                land[nextI-1][nextJ] = 0;
                queue.push([nextI-1, nextJ]);
            }
        }
        return cnt;
    }
    
    const columns = Array.from({length: cLen}, () => 0);
    
    for(let j = 0; j < cLen; j++){
        for(let i = 0; i < rLen; i++){
            if(land[i][j] === 1){
                const count = findOil(i, j);
                for(let c = j; c <= end; c++) columns[c] += count;
                console.log(count)
                end = 0;
            }
        }
    }
    
    return Math.max(...columns);
}
