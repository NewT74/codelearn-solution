function diffirentBinary(a, b) {
    a = a.toString(2);
    b = b.toString(2);
    if(a.length < b.length) a = '0'.repeat(b.length - a.length) + a;
    if(b.length < a.length) b = '0'.repeat(a.length - b.length) + b;
    let count = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] != b[i]) count++;
    }
    return count;
}
