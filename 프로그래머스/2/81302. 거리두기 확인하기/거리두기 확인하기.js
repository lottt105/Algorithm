function solution(places) {
    function check(p){
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                const room = places[p];
                if(room[i][j] === "P"){
                    if((i >= 1 && j >= 1 && room[i-1][j-1] === "P")
                      && (room[i][j-1] === "O" || room[i-1][j] === "O")) return 0;
                    if((i <= 3 && j >= 1 && room[i+1][j-1] === "P")
                      && (room[i][j-1] === "O" || room[i+1][j] === "O")) return 0;
                    if((i <= 3 && j <= 3 && room[i+1][j+1] === "P")
                      && (room[i][j+1] === "O" || room[i+1][j] === "O")) return 0;
                    if((i >= 1 && j <= 3 && room[i-1][j+1] === "P")
                      && (room[i][j+1] === "O" || room[i-1][j] === "O")) return 0;

                    if(i >= 1 && room[i-1][j] === "P") return 0;
                    if(i >= 2 && room[i-1][j] === "O" && room[i-2][j] === "P") return 0;
                    if(j >= 1 && room[i][j-1] === "P") return 0;
                    if(j >= 2 && room[i][j-1] === "O" && room[i][j-2] === "P") return 0;
                    if(i <= 3 && room[i+1][j] === "P") return 0;
                    if(i <= 2 && room[i+1][j] === "O" && room[i+2][j] === "P") return 0;   
                    if(j <= 3 && room[i][j+1] === "P") return 0;
                    if(j <= 2 && room[i][j+1] === "O" && room[i][j+2] === "P") return 0;
                }
            }
        }
        return 1;
    }
        
    const answer = [];
    
    for(let p = 0; p < 5; p++){
        answer.push(check(p));
    }
    return answer;
}