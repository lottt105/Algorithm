const solution = (genres, plays) => {
    let best_album = [];
    let songs = {};
    
    for (let i = 0; i < genres.length; i++){
        let genre = genres[i];
        songs[genre] ? songs[genre].push({"play": plays[i], num: i}) :
        songs[genre] = [{"play": plays[i], num: i}]
    }
    // 1. 장르별 총 재생횟수
    let play_sum = {};
    genres.forEach((g, i) => {
        play_sum[g] ? play_sum[g] += plays[i] : play_sum[g] = plays[i];
    });
    // 2. 정렬(장르별 -> 재생순)
    for(let g in songs){
        songs[g].sort((a, b) => b.play - a.play)
    }
    // 3. 차례대로 두개씩
    let ordered_play_sum = Object.entries(play_sum).sort((a, b) => b[1] - a[1]);
    for (let g of ordered_play_sum){
        if (songs[g[0]][1]) best_album.push(songs[g[0]][0].num, songs[g[0]][1].num);
        else best_album.push(songs[g[0]][0].num);
    }
    return best_album;
}