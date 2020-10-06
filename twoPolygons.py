def twoPolygons(n, m):
    if m < 3 or n == m:
        return False
    return n % m ==0
