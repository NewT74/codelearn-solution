import math
from itertools import compress

def prime_sieve(limit):
    if limit < 2:
        return []
    limit += 1
    primes = [True]*limit
    for base in range(2, int(limit ** 0.5 + 1)):
        if primes[base]:
            primes[base * 2:limit:base] = [False] * (math.ceil(limit / base) - 2)
    primes[0] = primes[1] = False
    return compress(range(limit), primes)

def reverse_prime_index(arr):
    s = list(prime_sieve(len(arr) - 1))
    total = len(s)
    mid = total // 2
    for i in range(mid):
        arr[s[i]], arr[s[total - i - 1]] = arr[s[total - i - 1]], arr[s[i]]
    return arr
