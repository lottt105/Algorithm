function solution(msg) {
    const checkedArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const msgArr = msg.split('');
    const result = [];
    while(msgArr.length > 0){
        let s = msgArr.shift();
        while(checkedArr.includes(s + msgArr[0])){
            s += msgArr.shift();
        }
        result.push(checkedArr.indexOf(s) + 1);
        checkedArr.push(s + msgArr[0])
    }
    return result;
}