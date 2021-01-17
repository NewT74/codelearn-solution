function shortestDistance(s,c){
    const where = {};
    for(let i = 0; i < s.length; i++) {
        if(where[s[i]] == undefined) where[s[i]] = [i];
        else where[s[i]].push(i);
    }
    if(where[c] == undefined) return [];
    let result = [];
    for(let i = 0; i < s.length; i++) {
        let min = 25001;
        for(const j of where[c]) {
            min = Math.min(min, Math.abs(i - j));
        }
        result.push(min);
    }
    return result;
}
