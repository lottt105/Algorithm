function solution(book_time) {
    let temp = [];
    const time_num = book_time.map(([start, end]) => {
        temp = [...start.split(":"), ...end.split(":")];
        return [(+temp[0]*60)+(+temp[1]), (+temp[2]*60)+(+temp[3])]
    })
    time_num.sort((a, b) => a[0] - b[0]);

    const rooms = [time_num[0][1]+10];
    
    for(let t = 1; t < time_num.length; t++){
        const [start, end] = time_num[t];
        
        if(start < Math.min(...rooms)){
            rooms.push(end + 10);
            continue;
        }
        for(let i = 0; i < rooms.length; i++){
            if(start >= rooms[i]){
                rooms[i] = end + 10;
                break;
            }
        }
    }
    return rooms.length;
}