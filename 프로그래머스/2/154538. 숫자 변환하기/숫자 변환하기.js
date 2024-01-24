function solution(x, y, n) {     
    function BFS() {
        const queue = [[y, 0]];
        const dp = {};
        let min = -1;
        
        while(queue.length) {
            let [cur, count] = queue.shift();
            dp[cur] = count;
            
            if(cur === x) {
                min = count
                break;
            }

            if((cur%3) === 0 && (cur/3) >= x && dp[cur/3] === undefined) queue.push([cur/3, count + 1]);
            if((cur%2) === 0 && (cur/2) >= x && dp[cur/2] === undefined) queue.push([cur/2, count + 1]);
            if((cur-n) >= x && dp[cur-n] === undefined) queue.push([cur-n, count + 1]);
        }
        return min;
    }
   
    return BFS();
}