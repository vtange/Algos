

/*
sudoku

solve(game):
    if (game board is full)
        return SUCCESS
    else
        next_square = getNextEmptySquare()
        for each value that can legally be put in next_square
            put value in next_square (i.e. modify game state)
            if (solve(game)) return SUCCESS
            remove value from next_square (i.e. backtrack to a previous state)
    return FAILURE

*/