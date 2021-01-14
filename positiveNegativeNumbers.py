def positiveNegativeNumbers(n):
    if n == 0:
        return 10
    if n > 0 and n < 10:
        return n
    a = []
    for i in range(9, 1, -1):
        while n % i == 0:
            a.append(i)
            n //= i
    if n != 1:
        return -1
    return int(''.join(list(map(str, a[::-1]))))
