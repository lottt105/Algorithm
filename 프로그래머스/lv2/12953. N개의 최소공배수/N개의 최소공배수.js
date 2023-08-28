const getLCM = (n1, n2) => {
    let lcm = 1;
    while(true){
        if((lcm % n1 === 0) && (lcm % n2 === 0)) {
            break;
        }
        lcm++;
    }
    return lcm;
}

function solution(arr) {
    let lcm = arr[0];
    for(let i = 1; i < arr.length; i++){
        lcm = getLCM(lcm, arr[i])
    }
    
    return lcm
}

