const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', (line) => {
    input = line.split(' ');
}).on('close', () => {
    solution(Number(input[0]));
});

const solution = (len) => {
    for (let i = 1; i <= len; i++){
        console.log("*".repeat(i));
    }
}