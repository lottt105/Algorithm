function solution(name) {
    // 이름에서 연속된 A가 가장 많은 부분을 한 곳 들르지 않고 이동할 수 있는 상황임
    // 1. 오른쪽으로 쭉 가는 기본 상황
    // 2. 오른쪽으로 가다가 A를 만나면 왼쪽으로 이동하는 상황
    // 3. 왼쪽으로 가다가 A를 만나면 오른쪽으로 이동하는 상황
    
    let result = 0;
    let min_move = name.length;
    for(let i = 0; i < name.length; i++){
        result += Math.min(name.charCodeAt(i) - 65, 
                           90 - name.charCodeAt(i) + 1);
        let next = i+1;
        while(next < name.length && name[next] === 'A'){
            next += 1;
        }
        min_move = Math.min(min_move, 2*i + name.length - next, 
                            i + 2*(name.length - next));
        console.log(min_move)
    }
    return result + min_move;
    
}