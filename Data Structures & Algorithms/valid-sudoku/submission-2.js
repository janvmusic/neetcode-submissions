class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let validDigits = /[1-9]/
        let rows = {
            '0': true,
            '1': true,
            '2': true,
            '3': true,
            '4': true,
            '5': true,
            '6': true,
            '7': true,
            '8': true,
        };

        let cols = {
            '0': true,
            '1': true,
            '2': true,
            '3': true,
            '4': true,
            '5': true,
            '6': true,
            '7': true,
            '8': true,
        };

        let grids = {
            '00': true,
            '01': true,
            '02': true,
            '10': true,
            '11': true,
            '12': true,
            '20': true,
            '21': true,
            '22': true,
        }

        let gridMap = {
            '00': new Set(),
            '01': new Set(),
            '02': new Set(),
            '10': new Set(),
            '11': new Set(),
            '12': new Set(),
            '20': new Set(),
            '21': new Set(),
            '22': new Set(),
        };

        for (let i = 0; i < board.length; i++) {
            let uniqRows = new Set();
            let uniqCols = new Set();

            for (let j = 0; j < board.length; j++) {
                let row = board[i][j];
                let col = board[j][i];
                let grid = board[i][j];
                let key = `${Math.floor(i / 3)}${Math.floor(j / 3)}`;

                if (row !== '.' && (!validDigits.test(row) || uniqRows.has(row))) {
                    rows[i] = false
                } else if (row !== '.') {
                    uniqRows.add(row);
                }

                if (col !== '.' && (!validDigits.test(col) || uniqCols.has(col))) {
                    cols[i] = false
                } else if (col !== '.') {
                    uniqCols.add(col);
                }

                if(grid !== '.' && (!validDigits.test(grid) || gridMap[key].has(grid))) {
                    grids[key] = false;
                } else if (grid !== '.') {
                    gridMap[key].add(grid)
                }
            }
        }

        let validRows = Object.values(rows).every(value => value === true);
        let validCols = Object.values(cols).every(value => value === true);
        let validGrids = Object.values(grids).every(value => value === true);
        
        return validRows && validCols && validGrids;
    }
}
