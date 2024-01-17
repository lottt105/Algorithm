function solution(w, h) {
    if(w === h) return (w * h) - w;
    if(w === 1 || h === 1) return 0;
    
    const gcd = (num1, num2) => {
        let r = num1 % num2;
        if (r === 0) return num2;
        return gcd(num2, r);
    }   
    
    const gcd_num = gcd(w, h);
    
    return (w * h) - (((w / gcd_num) + (h / gcd_num) - 1) * gcd_num);
}