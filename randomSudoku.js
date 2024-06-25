// this is the portion that is AI generated and not made by me ! , other files are created and managed by Dev Trivedi

class Sudoku {
    constructor() {
        this.grid = Array(9).fill().map(() => Array(9).fill(0));
    }

    isValid(num, pos) {
        const [row, col] = pos;

        for (let i = 0; i < 9; i++) {
            if (this.grid[row][i] === num && i !== col) return false;
        }

        for (let i = 0; i < 9; i++) {
            if (this.grid[i][col] === num && i !== row) return false;
        }

        const boxRow = Math.floor(row / 3) * 3;
        const boxCol = Math.floor(col / 3) * 3;
        for (let i = boxRow; i < boxRow + 3; i++) {
            for (let j = boxCol; j < boxCol + 3; j++) {
                if (this.grid[i][j] === num && (i !== row || j !== col)) return false;
            }
        }

        return true;
    }

    solve() {
        const emptyCell = this.findEmptyCell();
        if (!emptyCell) return true;

        const [row, col] = emptyCell;
        const nums = this.shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);

        for (let num of nums) {
            if (this.isValid(num, [row, col])) {
                this.grid[row][col] = num;
                if (this.solve()) return true;
                this.grid[row][col] = 0;
            }
        }

        return false;
    }

    findEmptyCell() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (this.grid[i][j] === 0) return [i, j];
            }
        }
        return null;
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    generate() {
        this.solve();
        const positions = this.shuffleArray([...Array(81).keys()]);
        let clues = 81;

        for (let pos of positions) {
            const row = Math.floor(pos / 9);
            const col = pos % 9;
            const temp = this.grid[row][col];
            this.grid[row][col] = 0;
            clues--;

            const tempGrid = JSON.parse(JSON.stringify(this.grid));
            const tempSudoku = new Sudoku();
            tempSudoku.grid = tempGrid;

            if (!tempSudoku.hasUniqueSolution() || clues < 17) {
                this.grid[row][col] = temp;
                clues++;
            }
        }
    }

    hasUniqueSolution() {
        const solutions = [];
        this.findSolutions(solutions);
        return solutions.length === 1;
    }

    findSolutions(solutions) {
        const emptyCell = this.findEmptyCell();
        if (!emptyCell) {
            solutions.push(JSON.parse(JSON.stringify(this.grid)));
            return;
        }

        const [row, col] = emptyCell;
        for (let num = 1; num <= 9; num++) {
            if (this.isValid(num, [row, col])) {
                this.grid[row][col] = num;
                this.findSolutions(solutions);
                this.grid[row][col] = 0;
            }
        }
    }

    print() {
        for (let i = 0; i < 9; i++) {
            if (i % 3 === 0 && i !== 0) console.log("-".repeat(21));
            for (let j = 0; j < 9; j++) {
                const cellId = `cell-${i}-${j}`;
                const cellElement = document.getElementById(cellId);
                if (cellElement) {
                    const num = this.grid[i][j];
                    cellElement.innerText = num === 0 ? '' : num;
                    if (num != 0) {
                        cellElement.style.color = "#b2df4a";
                        cellElement.style.fontWeight = "800";
                    }
                }
            }
        }
    }
}


