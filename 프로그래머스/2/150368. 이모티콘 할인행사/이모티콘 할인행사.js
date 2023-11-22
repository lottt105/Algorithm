function solution(users, emoticons) {
    const discounts = [40, 30, 20, 10];
    let result = [0, 0];
    
    function compare(rates){
        let enroll = 0;
        let purchase = 0;
        users.forEach((user, i) => {
            const sum = rates.reduce((acc, cur, j) => {
                if(cur >= user[0]) {
                    return acc += (emoticons[j] * ((100 - cur) / 100));
                }
                return acc;
            }, 0);
            if(sum >= user[1]) enroll += 1;
            else purchase += sum;
        });
        if(result[0] < enroll ||
           (result[0] === enroll && result[1] < purchase)){
            result[0] = enroll;
            result[1] = purchase;
        }
    }
    
    function dfs(rates){
        if(rates.length === emoticons.length) {
            compare(rates);
            return;
        }
        discounts.forEach((discount) => {
            const newRates = [...rates, discount];
            dfs(newRates);
        });
    }
    
    dfs([]);
    compare([40, 40])
    return result;
}