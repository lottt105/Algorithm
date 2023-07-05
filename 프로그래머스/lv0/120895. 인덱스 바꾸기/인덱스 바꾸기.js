const solution = (my_string, num1, num2) => {
    let s_arr = [...my_string];
    let n = s_arr.splice(num1, 1, my_string[num2]);
    s_arr.splice(num2, 1, n);
    return s_arr.join('');
}