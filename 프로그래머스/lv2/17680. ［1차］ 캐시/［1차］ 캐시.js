function solution(cacheSize, cities) {
    if(cacheSize === 0){
        return cities.length * 5;
    }
    const cache = [];
    let time = 0;
    cities.forEach((city) => {
        const lower_city = city.toLowerCase();
        time += cache.includes(lower_city) ? 1 : 5;
        if(cache.length < cacheSize){
            cache.push(lower_city);
        } else {
            if(cache.includes(lower_city)){
                cache.splice(cache.indexOf(lower_city),1);
            } else {
                cache.shift();
            }
            cache.push(lower_city);
        }
    })
    return time;
}