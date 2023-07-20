const solution = (nums) => {
    let species = {};
    let len = 0;
    for (let n of nums) {
        if (!species[n]){
            species[n] = 1;
            len++;
        } 
        else species[n]++;
    }
    
    return Math.min(nums.length / 2, len)
}