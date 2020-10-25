def factors(n):
    r = set()
    for i in range(1, int(math.sqrt(n)) + 1):
        if n % i == 0:
            r.add(i)
            r.add(n // i)
    return sum(r) - n

def amicableNumbers(a, b):
    return factors(a) == b and factors(b) == a
