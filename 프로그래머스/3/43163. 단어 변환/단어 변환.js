function solution(begin, target, words) {
    if(!words.includes(target)) return 0;
    let len = words.length, result = 51;
    // dfs로 풀이
    const find_word = (cur_word, i, word_arr) => {
        // target 값 찾으면 현재 단계수 반환
        if(cur_word === target) return i;
      
        for(let j = 0; j < word_arr.length; j++){
            // 지금 단어와 글자 한개만 차이나는 단어 탐색
            const cnt = [...word_arr[j]].filter((s, i) => s === cur_word[i])
            if(cnt?.length === begin.length-1) {
                let next_arr = [...word_arr.slice(0, j), ...word_arr.slice(j+1)]
                const idx = find_word(word_arr[j], i+1, next_arr);
                // 반환된 값이 result보다 작으면 해당 값으로 변경
                result = Math.min(result, idx)
            }
        }
        // target 값 못 찾으면 그냥 return
        return result;
    }
    find_word(begin, 0, words)
    return result;
}