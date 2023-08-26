function solution(n,a,b)
{
    // 1. a, b가 같아질 때까지 반복
    // 2. 각 반복마다 a, b를 2로 나누고, 나눠떨어지지 않는 경우, 올림
    let round = 0;
    while(a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        round += 1;
    }
    return round;
}