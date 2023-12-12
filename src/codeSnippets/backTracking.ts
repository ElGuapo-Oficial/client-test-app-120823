const sudoku: string = `
function solveSudoku(table) {
    for row {
        for col {
            if (table[row][col] === '') {
                for (k = 1; k <= 9; k++) {
                    if (isValid(k)) {
                        table[row][col] = k;
                        if (solveSudoku(table)) {
                            return true;
                        }
                        table[row][col = '';
                    }
                }
                return false;
            }
        }
    }
    return true;
}
`;

const nqueens: string = `
function solveNQueens(board, col) {
    if (col >= board.length) {
        return true;
    }
    for (let i = 0; i < board.length; i++) {
        if (isSafe(board, i, col)) {
            board[i][col] = 1;
            if (solveNQueens(board, col + 1)) {
                return true;
            }
            board[i][col] = 0; // Backtrack
        }
    }
    return false;
}
`;

export {
    sudoku,
    nqueens
}