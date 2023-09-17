function solution(skill, skill_trees) {
    let result = 0;
    const reg = new RegExp(`[${skill}]`, 'g');
    for(let skills of skill_trees){
        let s = skills.match(reg)
        s ? s = s.join('') : result++;
        if(skill.startsWith(s)) result++;
    }
    return result;
}
// function solution(skill, skill_trees) {

//     let answer = 0;
//     const skillList = skill.split("");

//     for (let skills of skill_trees) {
//         let temp = [];
//         for (let s of skills) {
//             if (skillList.includes(s)) temp.push(s);
//         }
//         if (skill.startsWith(temp.join(""))) answer += 1;
//     }
//     return answer;
// }
