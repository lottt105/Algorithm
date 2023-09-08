const getObj = (str) => {
    const obj = {};
    const reg = new RegExp('[a-zA-Z]{2}');
    for(let i = 0; i < str.length - 1; i++){
        const s = str.slice(i, i+2).toUpperCase();
        if(reg.test(s)){
            obj[s] ? obj[s] += 1 : obj[s] = 1;
        }
    }
    return obj;
}

function solution(str1, str2) {
    const obj1 = getObj(str1);
    const obj2 = getObj(str2);
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    let union = 0;
    let inter = 0;
    if(keys1.length === 0 && keys2.length === 0){
        return 65536;
    }
    for(let i = 0; i < keys1.length; i++){
        const k = keys1[i];
        // obj2에 같은 값이 있는 경우
        if(keys2.includes(k)){
            union += Math.max(obj1[k], obj2[k]);
            inter += Math.min(obj1[k], obj2[k]);
            obj1[k] = 0;
            obj2[k] = 0;
        } else { // 같은 값이 없는 경우
            union += obj1[k];
            obj1[k] = 0;
        }
    }
    for (let k in obj2) {
        if(obj2[k] !== 0) {
            union += obj2[k];
        } 
    }
    return parseInt((inter / union) * 65536)
}

