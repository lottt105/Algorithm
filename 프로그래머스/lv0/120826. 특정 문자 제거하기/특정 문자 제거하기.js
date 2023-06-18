const solution = (my_string, letter) => {
    return [...my_string].map((v, i) => v === letter ? '' : v).join('');
}