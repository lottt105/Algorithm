const solution = (n, words) => {
    const check = [words[0]];
    let result = [0, 0];
    for(let i = 1; i < words.length; i++){
        const p_last_letter = words[i-1][words[i-1].length-1];
        if(check.indexOf(words[i]) !== -1 ||
                words[i][0] !== p_last_letter) {
            result = [(i % n) + 1, Math.ceil((i+1) / n)];
            break;
        } else {
            check.push(words[i]);
        }
    }
    return result;
}