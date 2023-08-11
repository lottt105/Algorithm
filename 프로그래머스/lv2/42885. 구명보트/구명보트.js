function solution(people, limit) {
    people.sort((a, b) => a - b);
    let result = 0;
    while (people.length > 0){
        if (people.length === 1){
            result += 1;
            break;
        }
        if (people[0] + people[people.length-1] > limit){
            people.pop();
            result += 1;
        } else {
            people.pop();
            people.shift();
            result += 1;
        }
    }
    
    return result;
}