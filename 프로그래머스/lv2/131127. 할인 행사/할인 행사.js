function solution(want, number, discount) {
    const want_obj = want.reduce((a, c, i) => {
        a[c] = number[i];
        return a; 
    }, new Object);
    
    let check = [];
    let chk_obj = Object.assign({}, want_obj);
    let result = 0;
    for(let i = 0; i < discount.length; i++){
        check.push(discount[i]);
        chk_obj[discount[i]]--;
        if(chk_obj[discount[i]] >= 0){
            if(check.length === 10){
                result++;
                let a = check.shift();
                chk_obj[a]++;
            }
        } else {
            if(check.length !== 0){
                if(chk_obj[discount[i]] >= -1){
                    for(let j = 0; j < check.length; j++){
                        chk_obj[check[j]]++;
                        if(check[j] === discount[i]){
                            check = check.slice(j+1, i);
                            break;
                        }
                    }
                } else {
                    check = []
                    chk_obj = Object.assign({}, want_obj);
                }
            }
        }
    }
    return result;
}