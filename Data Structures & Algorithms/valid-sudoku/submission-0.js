class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowResult = this.buildRowsResult(board);
        let colResult = this.buildColsResult(board);
        let gridResult = this.buildGridsResult(board);

        return rowResult && colResult && gridResult;
    }

    buildRowsResult(board) {
        let rows = {};
        let validDigits = /[1-9]/

        for (let i = 0; i < board.length; i++) {
            rows[i] = true;
            let uniq = new Set();

            for (let j = 0; j < board.length; j++) {
                let val = board[i][j];

                if (val === '.') {
                    continue;
                }
                
                if (!validDigits.test(val) || uniq.has(val)) {
                    rows[i] = false;
                    break;
                }

                uniq.add(val);
            }

        }

        return Object.values(rows).every(value => value === true);
    }

    buildColsResult(board) {
        let cols = {};
        let validDigits = /[1-9]/

        for (let i = 0; i < board.length; i++) {
            cols[i] = true;
            let uniq = new Set();

            for (let j = 0; j < board.length; j++) {
                let val = board[j][i];

                if (val == '.') {
                    continue;
                }

                if (!validDigits.test(val) || uniq.has(val)) {
                    cols[i] = false;
                    break;
                }

                uniq.add(val);
            }
        }

        return Object.values(cols).every(value => value === true);
    }

    buildGridsResult(board) {
        let validDigits = /[1-9]/
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

        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                let val = board[i][j];
                let key = `${Math.floor(i / 3)}${Math.floor(j / 3)}`;

                if (val === '.') {
                    continue;
                }
                
                if (!validDigits.test(val) || gridMap[key].has(val)) {
                    grids[key] = false;
                    break;
                }

                gridMap[key].add(val)
            }
        }

        return Object.values(grids).every(value => value === true);
    }
}
