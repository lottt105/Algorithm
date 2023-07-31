const solution = (sizes) => {
    // 1. 주어진 [w, h] 중 더 큰 값을 가로, 작은 값을 세로로 둠
    // 2. 설정된 w, h를 각각 longest_w, longest_h와 비교하여 가장 큰 값을 찾음  
    let longest_w = -1;
    let longest_h = -1;
    
    sizes.forEach(([w, h]) => {
        const max = Math.max(w, h);
        const min = Math.min(w, h);
        
        longest_w = Math.max(longest_w, max);
        longest_h = Math.max(longest_h, min);
    })
    
    return longest_w * longest_h;
}