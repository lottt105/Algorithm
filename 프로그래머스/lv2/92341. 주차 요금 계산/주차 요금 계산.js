function solution(fees, records) {
    const getAcc = (in_time, out_time) => {
        const in_arr = in_time.split(':');
        const out_arr = out_time.split(':');
        return +out_arr[1] + (+out_arr[0] - +in_arr[0])*60 - +in_arr[1];
    }
    const in_dict = {};
    const result = {}
    for(let rec of records){
        const arr = rec.split(' ');
        if(arr[2] === 'IN'){
            in_dict[arr[1]] = arr[0];
        } else {
            result[arr[1]] ? 
              result[arr[1]] += getAcc(in_dict[arr[1]], arr[0]) :
              result[arr[1]] = getAcc(in_dict[arr[1]], arr[0]); 
            delete in_dict[arr[1]];
        }
    }
    Object.keys(in_dict).forEach(n => {
        result[n] ? 
          result[n] += getAcc(in_dict[n], '23:59') :
          result[n] = getAcc(in_dict[n], '23:59'); 
    })
    return Object.keys(result).sort((a, b) => +a - +b)
           .map(n => {
                if(result[n] <= fees[0]) return fees[1];
                else {
                    return fees[1] + 
                     Math.ceil((result[n] - fees[0]) / fees[2]) * fees[3]
                }
            })
}