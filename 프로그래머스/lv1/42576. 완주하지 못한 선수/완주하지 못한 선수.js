const solution = (participant, completion) => {
    let frequency = {};
    participant.forEach(p => frequency[p] ? frequency[p]++ : frequency[p] = 1);
    completion.forEach(c => frequency[c]--);
    for(let k in frequency) {
        if(frequency[k] === 1) return k; 
    }
}