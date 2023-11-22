function solution(k, ranges) {
    const numbers = [];
    
    while (k > 1){
        numbers.push(k);
        if(k % 2 === 0) k = k / 2;
        else k = k * 3 + 1;
    }
    numbers.push(1);
    
    const areas = Array.from({length: numbers.length - 1}, (v, i) => {
        const box_height = Math.min(numbers[i], numbers[i + 1]);
        const tri_height = Math.abs(numbers[i] - numbers[i + 1]);
        
        return box_height + tri_height / 2;
    });
    
    return ranges.map((range) => {
        let sum = 0;
        const left = range[0], right = areas.length + range[1];
        
        if(left > right) return -1;
        for(let i = left; i < right; i++){
            sum += areas[i];
        }
        
        return sum;
    })
}