function createSudokuGrid() {
    const grid = document.getElementById('sudokuGrid');

    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement('div');
            cell.className = 'box-1x1';
            cell.id = `cell-${row}-${col}`;

            const subGridRow = Math.floor(row / 3);
            const subGridCol = Math.floor(col / 3);
            if ((subGridRow + subGridCol) % 2 === 0) {
                cell.classList.add('class-1');
            } else {
                cell.classList.add('class-2');
            }

            grid.appendChild(cell);
        }
    }
}

createSudokuGrid();

let arr = [2, 5];

for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < 9; ++j) {
        let target = document.querySelector(`#cell-${arr[i]}-${j}`);
        target.style.borderBottom = "2px solid #000";
    }
}

for (let i = 0; i < 9; ++i) {
    for (let j = 0; j < 9; ++j) {
        let divBox = document.querySelector(`#cell-${i}-${j}`);
        divBox.addEventListener("click", () => {
            let userInput = prompt("Please enter a number:");
            let number = Number(userInput);
            if (isNaN(number) || !(number >= 1 && number <= 9)) {
                alert("That's not a valid number.");
            } else {
                divBox.innerText = `${number}`;
                divBox.style.color = "#000000";
                divBox.style.fontWeight = "800";
            }
        });
    }
}

function isValid(row, col, input) {
    for (let i = 0; i < 9; ++i) {
        if (document.querySelector(`#cell-${row}-${i}`).innerText === input) {
            return false;
        }
        if (document.querySelector(`#cell-${i}-${col}`).innerText === input) {
            return false;
        }
        let subGridRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        let subGridCol = 3 * Math.floor(col / 3) + (i % 3);
        if (document.querySelector(`#cell-${subGridRow}-${subGridCol}`).innerText === input) {
            return false;
        }
    }
    return true;
}

function giveAns() {
    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
            let thisCell = document.querySelector(`#cell-${i}-${j}`);
            if (thisCell.innerText === "") {
                for (let c = 1; c <= 9; ++c) {
                    let charC = c.toString();
                    if (isValid(i, j, charC)) {
                        thisCell.style.backgroundColor = "#d7374f93";
                        thisCell.innerText = charC;
                        thisCell.style.backgroundColor = "";

                        if (giveAns()) {
                            return true;
                        } else {
                            thisCell.innerText = "";
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function solve() {
    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
            let str = document.querySelector(`#cell-${i}-${j}`).innerText;
            if (str !== "") {
                document.querySelector(`#cell-${i}-${j}`).innerText = "";
                if (!isValid(i, j, str)) {
                    alert("The Given Sudoku is not Valid");
                    document.querySelector(`#cell-${i}-${j}`).innerText = str;
                    return;
                }
                document.querySelector(`#cell-${i}-${j}`).innerText = str;
            }
        }
    }

    if (giveAns()) {
        // Sudoku solved
    } else {
        alert("The Sudoku cannot be solved");
    }
}

function resetData() {
    for (let i = 0; i < 9; ++i) {
        for (let j = 0; j < 9; ++j) {
            let thisCell = document.querySelector(`#cell-${i}-${j}`);
            thisCell.innerText = "";
            thisCell.style.color = "";
            thisCell.style.fontWeight = "";
        }
    }
}

document.querySelector('.solveButton').addEventListener('click', solve);
document.querySelector('.resetButton').addEventListener('click', resetData);
document.querySelector('.fill-sample').addEventListener("click", () => {
    const sudoku = new Sudoku();
    sudoku.generate();
    sudoku.print();
})
