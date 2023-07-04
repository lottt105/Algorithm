const solution = (my_string) => {
    return [...my_string].map(s => {
        if (s === s.toLowerCase()) return s.toUpperCase();
        else return s.toLowerCase();
    }).join('');
}