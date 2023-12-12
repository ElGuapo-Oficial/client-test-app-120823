const sudoku: string = `function solveSudoku(table) {
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

const nqueens: string = `function solveNQueens(board, col) {
    if (col >= board.length) {
        return true;
    }
    for (let i = 0; i < board.length; i++) {
        if (isSafe(board, i, col)) {
            board[i][col] = 1;
            if (solveNQueens(board, col + 1)) {
                return true;
            }
            board[i][col] = 0;
        }
    }
    return false;
}
`;

const targetSum: string = `function targetSum(candidates, target, currentCombination, start, result) {
    if (target === 0) {
        result.push([...currentCombination]);
        return;
    }

    for (let i = start; i < candidates.length; i++) {
        // Skip duplicates to avoid duplicate combinations
        if (i > start && candidates[i] === candidates[i - 1]) {
            continue; 
        }
        const num = candidates[i];
        // No need to continue if the current number is greater than the target
        if (num > target) {
            break;
        }

        currentCombination.push(num); 
        targetSum(candidates, target - num, currentCombination, i + 1, result);
        currentCombination.pop();
    }
} 
`;

export {
    sudoku,
    nqueens,
    targetSum
}