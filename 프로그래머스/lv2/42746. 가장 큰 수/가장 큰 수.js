function solution(numbers) {
    let result =  numbers.map(n => String(n));
    result.sort((a, b) => {
        if(a.repeat(3) < b.repeat(3)){
            return 1;
        } else if(a.repeat(3) > b.repeat(3)){
            return -1;
        } else {
            return 0;
        }
    });
    result = result.join('');
    return Number(result) === 0 ? "0" : result;
}