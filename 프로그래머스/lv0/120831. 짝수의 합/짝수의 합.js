const solution = (n) => {
    if (n == 1) return 0;
    return n % 2 ? (2 + n - 1) * ((n - 1) / 4) : (2 + n) * (n / 4);
}