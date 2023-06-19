const solution = (emergency) => {
    // 새로운 배열에 원본 배열을 복사한 후 내림차순 정렬해서 저장
    let sorted = [...emergency].sort((a, b)=>b-a);
    // 원본 배열의 값이 정렬된 배열 어느 인덱스에 있는지 가져와서 1 더해줌
    return emergency.map((n) => sorted.indexOf(n) + 1);
}