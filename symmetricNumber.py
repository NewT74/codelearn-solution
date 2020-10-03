def symmetric_number(n):
    while True:
        n += int(str(n)[::-1])
        if str(n) == str(n)[::-1]:
            return n
