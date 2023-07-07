const solution = (quiz) => {
   return quiz.map(q => {
       let arr = q.split(' ');
       let a = arr[1] === '-' ? +arr[0] - +arr[2] : +arr[0] + +arr[2];
       return a === +arr[4] ? "O" : "X";
   });
}