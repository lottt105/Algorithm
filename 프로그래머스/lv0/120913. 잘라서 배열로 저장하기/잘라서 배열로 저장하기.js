function solution(my_str, n) {
    let regex = new RegExp(`.{1,${n}}`, 'g');
    return my_str.match(regex);
}