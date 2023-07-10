function solution(numbers) {
    const LEN = numbers.length;
    numbers.sort((a, b) => a - b);
    return Math.max(numbers[LEN - 1] * numbers[LEN - 2], numbers[0] * numbers[1]);
}