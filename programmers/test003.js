function solution(s) {
    if(s.length%2===0) {
        let x = s.substr(s.length/2-1,2);
        return x;
    } else {
        let y = s.substr(s.length/2,1);
        return y;
    }
}
