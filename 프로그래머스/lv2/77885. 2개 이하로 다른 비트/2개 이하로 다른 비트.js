function solution(numbers) {
    //첫 자리가 0인 경우 1로 바꿔준다.
    //이외의 자리에서 0이 나오는 경우 0이 나온 인덱스의 앞은 1이므로, 01 을 10으로 바꿔준다.
    const result = numbers.map(num => {
        const toStr = num.toString(2)
        let zero_i = toStr.split('').reverse().indexOf('0');
        if(zero_i === -1) {
            return parseInt('10'+toStr.slice(1), 2)
        }
        else if(zero_i === 0){
            return parseInt(toStr.slice(0, toStr.length-1) + '1', 2)
        }
        return parseInt(toStr.slice(0, toStr.length-zero_i-1) + '10'+toStr.slice(toStr.length-zero_i+1), 2)
        
    })
    return result;
}