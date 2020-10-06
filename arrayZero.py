def arrayZero(s):
    s = [int(i) for i in s]
    count = 0
    while s[0] != 0 or s[1] != 0 or s[2] != 0 or s[3] != 0:
        sCopy = s.copy()
        s[0] = abs(sCopy[0] - sCopy[1])
        s[1] = abs(sCopy[1] - sCopy[2])
        s[2] = abs(sCopy[2] - sCopy[3])
        s[3] = abs(sCopy[0] - sCopy[3])
        count += 1
    return count
