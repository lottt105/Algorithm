const solution = (chicken) => {
    let total_chicken = chicken;
    while(chicken >= 10){
        let r_chicken = Math.floor(chicken / 10)
        total_chicken += r_chicken;
        chicken = r_chicken + chicken % 10;
    }
    return Math.floor(total_chicken / 10);
}