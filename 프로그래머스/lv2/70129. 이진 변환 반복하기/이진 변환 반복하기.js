function solution(s) {
    // 1. 0의 개수(0)와 반복 횟수(0), s의 길이를 저장할 변수를 각각 만들어줌
    // 2. 반복할 때마다 s에서 0을 제거한 뒤, 저장해 둔 len_s에서 빼 주고 0 개수 업뎃
    // 3. 0을 제거한 s의 길이를 이진수로 변환
    // 4. s가 '1'이 될 때까지 2-3 반복
    let num_0 = 0;
    let len_s = s.length;
    let count = 0;
    while (s !== '1') {
        s = s.replace(/0/g, '');
        num_0 += len_s - s.length;
        s = String(Number(s.length).toString(2));
        len_s = s.length;
        count++;
    }
    return [count, num_0]
}