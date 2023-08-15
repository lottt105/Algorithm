function solution(s) {
    const arr_s = s.split(' ').map(s => Number(s)).sort((a, b) => a - b);
    return arr_s[0] + ' ' + arr_s[arr_s.length-1];

}