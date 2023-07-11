function solution(spell, dic) {
    let result = 2;
    spell = spell.sort().join('');
    dic.forEach((a) => {
       [...a].sort().join('') === spell ? result = 1 : '';
    });
    
    return result;
}