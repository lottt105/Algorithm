const solution = (lines) => {   
    //1. (1, 2), (1, 3), (2, 3) 구간 겹치는 곳 체크
    //2. 겹치는 곳의 경계 찾기
    let borders = [];
    lines.sort((a, b)  => a[0] - b[0]);
    if (lines[0][1] > lines[1][0]){
        borders.push([lines[1][0], Math.min(lines[0][1], lines[1][1])]);
    }
    if (lines[0][1] > lines[2][0]){
        borders.push([lines[2][0], Math.min(lines[0][1], lines[2][1])]);
    }
    if (lines[1][1] > lines[2][0]){
        borders.push([lines[2][0], Math.min(lines[1][1], lines[2][1])]);
    }
    console.log(borders)
    let b_len = borders.length;
    if(b_len === 0) return 0;
    else if(b_len === 1) return borders[0][1] - borders[0][0];
    
    let result = 0;
    let prev = 0;
    for(let i = 1; i < b_len; i++){
        if(borders[i-1][1] >= borders[i][0]) {
            if (borders[i-1][1] <= borders[i][1]){ 
                result += borders[i][1] - borders[i-1][prev];
            }
            prev = 1;
        } else {
            prev === 0 ? result += borders[i-1][1] - borders[i-1][0] : '';
            result += borders[i][1] - borders[i][0];
            prev = 1;
        };
    }
    return result;
    
}