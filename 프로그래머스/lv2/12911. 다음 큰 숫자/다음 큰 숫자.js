function solution(n) {
    let n_1 = n.toString(2).replace(/0/g, '').length;
    let m_1 = -1;
    while (m_1 !== n_1) {
        n++;
        m_1 = n.toString(2).replace(/0/g, '').length;
    }
    
    return n;
}