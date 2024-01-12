function solution(board)
{
    const row = board.length, col = board[0].length;
    const memo = Array.from(Array.from({length: row+1}), 
                            () => Array.from({length: col+1}).fill(0));
    let max = 0;
    for(let i = 0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(board[i][j] === 1){
                const cur = Math.min(memo[i][j+1], memo[i][j], memo[i+1][j])+1;
                memo[i+1][j+1] = cur;
                if(cur > max) max = cur;
            }
        }
    }
    return max ** 2;
}