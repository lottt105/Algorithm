function solution(triangle) {
    triangle[1][0] = triangle[0][0] + triangle[1][0];
    triangle[1][1] = triangle[0][0] + triangle[1][1];
    for(let i = 2; i < triangle.length; i++){
        triangle[i].forEach((v, j) => {
            const left = triangle[i-1][j-1] ? triangle[i-1][j-1] : 0;
            const right = triangle[i-1][j] ? triangle[i-1][j] : 0;
            triangle[i][j] += Math.max(left, right);
        })
    }
    
    return Math.max(...triangle[triangle.length - 1])
}