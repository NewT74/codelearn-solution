function sumDigits(number) {
    let sum = 0;
    while (number) {
        sum += number % 10;
        number = Math.floor(number / 10);
    }
    return sum;
}

function betterver2(n) {
    let factors = new Set();
    for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
        if (n % i == 0) {
            factors.add(n);
            factors.add(Math.floor(n / i));
        }
    }
    factors = [...factors].sort((a, b) => a - b);
    let max = 0,
        result;
    for (const number of factors) {
        let sum = sumDigits(number);
        if (sum > max) {
            max = sum;
            result = number;
        }
    }
    return result;
}
