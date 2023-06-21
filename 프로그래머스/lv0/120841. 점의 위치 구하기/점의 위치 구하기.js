const solution  = (dot) => {
    const [num, num2] = dot;
    const chk = num * num2;
    return chk > 0 ? (num < 0 ? 3 : 1) : (num < 0 ? 2 : 4);
}