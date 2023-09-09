const isPrime = (num) => {
    if(!num || num === '1') return false;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    n = n.toString(k);
    const arr = n.split(0);
    let result = 0;
    for (let num of arr){
        if(isPrime(num)) result++;
    }
    return result;
}