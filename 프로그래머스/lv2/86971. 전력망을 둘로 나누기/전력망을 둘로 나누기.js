function solution(n, wires) {
    const graph = {};
    for(let w of wires) {
        graph[w[0]] ? graph[w[0]].push(w[1]) : graph[w[0]] = [w[1]];
        graph[w[1]] ? graph[w[1]].push(w[0]) : graph[w[1]] = [w[0]];
    }
    
    const dfs = (n, g, chk) => {
        if(g[n].length === 0) return;
        
        g[n].forEach((v, j) => {
            chk === '1' ? node1_count++ : node2_count++;
            const next_g = JSON.parse(JSON.stringify(g));
            next_g[n].splice(j, 1);
            next_g[v].splice(next_g[v].indexOf(n), 1);
            dfs(v, next_g, chk);
        });
        
    }
    
    let answer = 100;
    let node1_count;
    let node2_count;
    
    for(let w of wires) {
        const [n1, n2] = w;
        
        const new_graph = JSON.parse(JSON.stringify(graph));
        new_graph[n1].splice(new_graph[n1].indexOf(n2), 1);
        new_graph[n2].splice(new_graph[n2].indexOf(n1), 1);
        
        node1_count = 1;
        dfs(n1, new_graph, '1');
        node2_count = 1;
        dfs(n2, new_graph, '2');
        
        const diff = Math.abs(node1_count - node2_count);
        if (diff <= 1) {
            answer = diff;
            break;
        }
        answer = Math.min(answer, diff);
    }
    return answer;
}