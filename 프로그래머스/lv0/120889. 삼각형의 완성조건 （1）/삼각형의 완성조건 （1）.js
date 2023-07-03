const solution = (sides) => {
    let max = Math.max(...sides);
    sides.splice(sides.indexOf(max), 1);
    return (max < sides[0] + sides[1]) ? 1 : 2;
}