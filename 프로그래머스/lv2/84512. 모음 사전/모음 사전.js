function solution(word) {
    const dfs = (w, vowels) => {
        count++;
        if(w === word) {
            check = true;
            return;
        }
        if(w.length === 5) return;
        for(let i = 0; i < vowels.length; i++){
            dfs(w+vowels[i], vowels)
            if(check) break;
        }
    }
    
    let count = 0;
    let check = false;
    dfs('', 'AEIOU');
    return count - 1;
}