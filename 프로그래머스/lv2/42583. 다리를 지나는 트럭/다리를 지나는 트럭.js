const solution = (bridge_length, weight, truck_weights) => {
    let time = 0;
    let passing = [];
    let sum = 0;
    let i = 0;
   
    while (passing.length || truck_weights.length) {         
        if (weight >= sum + truck_weights[0] && bridge_length >= passing.length) {
            const t = truck_weights.shift();
            passing.push([t, time + bridge_length]); // [트럭 무게, 트럭 나갈 시간]
            sum += t;
            ++time;
        } else {
            const [tr, passedTime] = passing.shift();
            if(passedTime > time) time = passedTime;
            sum -= tr;
        }
    }
    return time + 1;
}