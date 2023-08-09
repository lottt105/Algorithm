function solution(number, k) {
    let stack = [];
    // pop으로 요소를 순차적으로 뺄 수 있도록 reverse 해 줌
    let arr = number.split('').reverse();

    // arr이 비어있지 않고, k가 0보다 큰 동안 반복
    while(arr.length && k > 0){
        // arr에서 하나를 빼 와 stack에 넣음
        stack.push(arr.pop());
        // stack의 마지막 요소가 arr의 마지막 요소보다 작고, k>0인 동안 반복
        while(stack[stack.length-1] < arr[arr.length-1] && k>0) {
            // stack에서 마지막 요소를 빼고 k-1 함
            stack.pop();
            k = k-1;
        }
    }

    // k가 0이 아니면 stack의 마지막 요소부터 k개 만큼 제거 
    if(k !== 0) stack = stack.slice(0, -k) 

    // stck과 arr의 남은 요소를 합침
    return stack.join('') + arr.reverse().join('')
}