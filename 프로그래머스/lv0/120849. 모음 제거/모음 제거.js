function solution(my_string) {
    let answer = my_string.match(/[^aeiou]/g);
    return answer ? answer.join('') : "";
}