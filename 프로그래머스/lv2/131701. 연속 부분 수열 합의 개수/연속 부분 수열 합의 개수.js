function solution(elements) {
    const len = elements.length;
    elements = [...elements, ...elements];
    const result = [];
    for(let i = 1; i < len; i++){
        for(let j = 0; j < len; j++){
            result.push(elements.slice(j, j+i).reduce((a, c) => a += c));
        }
    }
    result.push(elements.reduce((a, c) => a += c));
    return new Set(result).size;
}