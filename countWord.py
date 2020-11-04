def countWord(str,word):
    try:
        count = {}
        total = 0
        for i in str:
            if count.get(i):
                count[i] += 1
            else:
                count[i] = 1
        while True:
            for i in word:
                if count[i] != 0:
                    count[i] -= 1
                else:
                    return total
            total += 1
    except:
        return 0
