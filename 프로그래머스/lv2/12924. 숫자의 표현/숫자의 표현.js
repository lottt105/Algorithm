function solution(n) {
    // 1. 1~n까지 반복
    // 2. 연속되는 값을 더해가며 15보다 크거나 같은지 확인
    // 3. 15보다 크거나 같아지면, 두번째 반복 탈출, 같은 경우 count + 1
    
    // 1. 합이 n이 될 수 있는 첫번째 연속한 자연수를 찾음
    // 2. 첫번째 자연수 배열의 마지막 값 + 1 보다 커질 수 있는 연속된 값을 배열에서 제거
    // 3. 
    let count = 0;
    let sum = 0;
    for(let i = 1; i <= Math.floor(n/2); i++) {
        for(let j = i; j <= n; j++) {
            sum += j;
            if(sum >= n) {
                if(sum === n) count++;
                sum = 0;
                break;
            }
        }
    }
    return count + 1;
}