function sumOfSquare(n) {
    let ans = 0;
    for (let c = Math.floor(Math.sqrt(n)); c >= 1; c--) {
        for (let b = Math.floor(Math.sqrt(n - Math.pow(c, 2))); b >= 0; b--) {
            let a = Math.floor(Math.sqrt(n - Math.pow(b, 2) - Math.pow(c, 2)));
            if (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2) == n && a < b && b < c) ans++;
        }
    }
    return a
