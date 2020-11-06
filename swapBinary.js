function swapBinary(a, b) {
    if(a.length != b.length) return -1;
    let count = 0;
    let check = [[0, 0], [0, 0]];
    for(let i = 0; i < a.length; i++) {
        if(a[i] == '0') check[0][0]++;
        else check[0][1]++;
        if(b[i] == '0') check[1][0]++;
        else check[1][1]++;
        if(a[i] != b[i]) count++;
    }
    if(check[0][0] != check[1][0] || check[0][1] != check[1][1]) return -1;
    return count / 2;
}
