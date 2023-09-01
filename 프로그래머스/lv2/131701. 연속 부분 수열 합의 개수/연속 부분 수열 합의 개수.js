function solution(elements) {
    const len = elements.length;
    elements = [...elements, ...elements];
    const result = new Set();
    for(let i = 1; i < len; i++){
        for(let j = 0; j < len; j++){
            result.add(elements.slice(j, j+i).reduce((a, c) => a += c));
        }
    }
    result.add(elements.reduce((a, c) => a += c));
    return result.size;
}