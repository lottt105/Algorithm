function solution(answers) {
    const getStudentAnswer = (str) => str.repeat(Math.floor(answers.length / str.length)) + str.slice(0, answers.length % str.length);
    
    const stu1 = getStudentAnswer('12345');
    const stu2 = getStudentAnswer('21232425');
    const stu3 = getStudentAnswer('3311224455');
    
    let count = [0, 0, 0];
    answers.forEach((a, i) => {
        if(a === +stu1[i]) count[0]++;
        if(a === +stu2[i]) count[1]++;
        if(a === +stu3[i]) count[2]++;
    });
    let max = Math.max(...count);
    return count.map((n, i) => max === n ? i + 1: 0)
                .filter(i => i !== 0);
}