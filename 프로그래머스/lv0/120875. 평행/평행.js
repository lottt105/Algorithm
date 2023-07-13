const solution = (dots) => {
    //1. [[a-b, c-d], [a-c, b-d], [a-d, b-c]] 경우의 기울기 구함
    //2. 각 경우 두 개의 직선의 기울기가 같은지 확인
    //3. 기울기가 같은 게 1개라도 있으면, 1 return
    const getTilt = (a, b) => {
        return Math.abs(dots[a][1]-dots[b][1]) / Math.abs(dots[a][0]-dots[b][0])
            .toFixed(5);
    }
    let result = 0;
    
    for(let i = 1; i < 4; i++) {
        let t1 = getTilt(0, i);
        switch(i) {
            case 1:
                t1 === getTilt(2, 3) ? result = 1 : '';
                break;
            case 2:
                t1 === getTilt(1, 3) ? result = 1 : '';
                break;
            case 3:
                t1 === getTilt(1, 2) ? result = 1 : '';
                break;
        }
    }
    return result;
}