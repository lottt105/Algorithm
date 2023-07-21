function solution(clothes) {
    // 0일 때를 포함해서 구하면 됨
    // 모두가 0인 경우는 제외해야되기 때문에 마지막에 -1 
    let clothes_dict = {};
    for (let c of clothes) clothes_dict[c[1]] ? clothes_dict[c[1]]++ : 
                               clothes_dict[c[1]] = 1;
    let mul = 1;
    for (let v of Object.values(clothes_dict)) mul *= (v + 1);
    return mul - 1;
}