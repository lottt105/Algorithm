function solution(numbers) {
    const permutation = (permu, rests, output) => {
        output.push(Number(permu));
        if(rests.length === 0) return;
        rests.forEach((v, idx) => {
            const rest = [...rests.slice(0, idx), ...rests.slice(idx + 1)];
            permutation(permu + v, rest, output)
        });
    }
    
    const isPrime = (n) => {
        for (let i = 2; i <= Math.ceil(n / 2); i++) {
          if (n % i === 0) {
            return false;
          }
        }
        return true;
    }
    
    const nums = [];
    permutation('', [...numbers], nums);
    
    const sets = [...new Set(nums)];
    return sets.filter(s => s > 1 && isPrime(s)).length;
}