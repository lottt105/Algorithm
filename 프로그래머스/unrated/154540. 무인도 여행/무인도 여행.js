// 한 요소에 값이 있으면, 그 값 기준으로  연결된 모든 요소를 탐색
// 각 요소마다 상하좌우 탐색
// X가 나오거나 maps의 가장자리에 도달하면 return

function solution(maps) {
    const foods = [];
    const row = maps.length;
    const col = maps[0].length;
    
    const check = [];
    maps.forEach(m => {
        const arr = new Array(col).fill(0);
        check.push(arr);
    })
    
    const dfs = (r, c) => {
        if(r >= row || r < 0 || c >= col || c < 0) return 0;
        if(maps[r][c] === 'X' || check[r][c] === 1) return 0;
        check[r][c] = 1;
        const up = dfs(r-1, c) //상
        const down = dfs(r+1, c) //하
        const left = dfs(r, c-1) //좌
        const right = dfs(r, c+1) //우
        return +maps[r][c] + up + down + left + right;
    }
    
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(check[i][j] === 1) continue;
            const food = dfs(i, j);
            if(food) foods.push(food);
        }
    } 
    return foods.length === 0 ? [-1] : foods.sort((a, b) => a-b);
}