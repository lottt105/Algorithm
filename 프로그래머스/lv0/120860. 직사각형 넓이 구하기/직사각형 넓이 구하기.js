const solution = (dots) => {
    let w = Math.abs(dots[0][0] !== dots[1][0] ? dots[0][0] - dots[1][0] 
                     : dots[1][0] - dots[2][0]);
    let h = Math.abs(dots[1][1] !== dots[2][1] ? dots[1][1] - dots[2][1] 
                     : dots[2][1] - dots[3][1]);
    return w * h;
}