function solution(progresses, speeds) {
    let days = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));

    let result = [];
    let long_day = days[0];
    let cnt = 1;
    for (let i = 1; i < days.length; i++) {
        if (days[i] > long_day) {
            long_day = days[i];
            result.push(cnt);
            cnt = 1;
        } else {
            cnt++;
        }
    }
    result.push(cnt);
    return result;
}