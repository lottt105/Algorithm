function solution(record) {
    const id_dict = {};
    const answer = []
    record.forEach((com) => {
        const arr = com.split(' ');
        if(arr[2]) id_dict[arr[1]] = arr[2];
    })
    
    record.forEach((com) => {
        const arr = com.split(' ');
        if(arr[0] === "Enter") {
            answer.push(`${id_dict[arr[1]]}님이 들어왔습니다.`);
        } else if(arr[0] === "Leave"){
            answer.push(`${id_dict[arr[1]]}님이 나갔습니다.`);
        }
    })
    return answer;
}