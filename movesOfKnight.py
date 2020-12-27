from itertools import product
def knight_moves(position):
    x, y = position
    moves = list(product([x-1, x+1],[y-2, y+2])) + list(product([x-2,x+2],[y-1,y+1]))
    moves = [(x,y) for x,y in moves if x >= 0 and y >= 0 and x < 8 and y < 8]
    return len(moves)

def moves_of_knight(s):
    columns = 'abcdefgh'
    rows = '12345678'
    column, row = s.lower()
    if column in columns and row in rows:
        return knight_moves((rows.index(row), columns.index(column)))
    return 0
