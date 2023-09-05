function solution(arr1, arr2) {
    const result = [];
    for(let i = 0; i < arr1.length; i++){
        const row = [];
        for(let j = 0; j < arr2[0].length; j++){
            const v = arr1[i].reduce((a, c, idx) => a + c * arr2[idx][j], 0);
            row.push(v);
        }
        result.push(row);
    }
    return result;
}