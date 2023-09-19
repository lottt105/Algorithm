function solution(arr) {
    let zero = 0;
    let one = 0;
    function quad(i1, j1, i2, j2){
        // 요소의 개수가 1일때 zero / one에 +1
        if(i2-i1 === 1 && j2-j1 === 1){
            arr[i1][j1] === 1 ? one++ : zero++;
            return arr[i1][j1];
        }
        // 각 box의 왼쪽위 꼭짓점, 오른쪽 아래 꼭짓점 
        const b1 = quad(i1, j1, (i1+i2)/2, (j1+j2)/2);
        const b2 = quad(i1, (j1+j2)/2, (i1+i2)/2, j2);
        const b3 = quad((i1+i2)/2, j1, i2, (j1+j2)/2);
        const b4 = quad((i1+i2)/2, (j1+j2)/2, i2, j2);
        const total = b1 + b2 + b3 + b4;
        // b1이 0 또는 1 또는 4로 나누어 떨어지는 수(모두 1일 경우)이고,
        if(b1 < 2 || b1 % 4 === 0){
            // b1 === b2 === b3 === b4 이면 zero / one에 -3
            if(b1 === b2 && b1 === b3 && b1 === b4){
                total === 0 ? zero -= 3 : one -= 3;
                // 모두 더한 값 return
                return total;
            }
        }
        // 의미 없는 값 return
        //return +`${b1}+${b2}+${b3}+${b4}`;
    }
    quad(0, 0, arr.length, arr.length)
    return [zero, one]
}