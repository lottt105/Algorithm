function solution(array, commands) {
    const result = [];
    for(let i = 0; i < commands.length; i++) {
        const new_arr = array.slice(commands[i][0]-1, commands[i][1]);
        new_arr.sort((a, b) => a-b);
        result.push(new_arr[commands[i][2]-1]);
    }
    return result;
}