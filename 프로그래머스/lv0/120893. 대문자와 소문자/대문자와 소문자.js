const solution = (my_string) => {
    return [...my_string].map(s => s === s.toLowerCase() ? s.toUpperCase() : s.toLowerCase()).join('');
}