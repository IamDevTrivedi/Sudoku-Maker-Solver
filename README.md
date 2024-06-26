# Sudoku Maker & Solver - Online

Welcome to the **Sudoku Maker & Solver** project! This web application allows you to generate and solve Sudoku puzzles online. It provides an interactive interface for creating Sudoku grids, filling them with sample data, clearing inputs, and solving the Sudoku puzzle.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Backtracking Algorithm](#backtracking-algorithm)

## Demo
You can access a live demo of the project [here](https://iamdevtrivedi.github.io/Sudoku-Maker-Solver/).

## Features
- Generate a sample Sudoku puzzle with a unique solution.
- Solve a partially filled Sudoku grid.
- Clear all user inputs to start fresh.
- Interactive grid where users can click on cells to input numbers.
- Responsive design suitable for various screen sizes.

## Installation
To set up the project locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/IamDevTrivedi/Sudoku-Maker-Solver.git
    ```
2. **Navigate to the project directory:**
    ```sh
    cd Sudoku-Maker-Solver
    ```
3. **Open `index.html` in your preferred web browser.**

## Usage
1. Open the application in your web browser.
2. Click "Generate Sample" to create a new Sudoku puzzle.
3. Click on any cell in the Sudoku grid to input numbers (1-9).
4. Click "Solve Sudoku" to solve the puzzle and see the solution.
5. Click "Clear Input" to reset the Sudoku grid and start over.

## Technologies Used
- **HTML5**: Structure and layout of the web pages.
- **CSS3**: Styling the application for a clean and responsive design.
- **JavaScript**: Handling Sudoku generation, validation, and user interactions.

## Backtracking Algorithm
The Sudoku solving algorithm implemented in this project uses a backtracking approach. Here's a brief overview of how it works:

- **isValid(num, pos)**: Checks if placing `num` at position `pos` (row, column) in the Sudoku grid is valid according to Sudoku rules (no repeated numbers in the same row, column, or 3x3 subgrid).

- **solve()**: Recursively attempts to solve the Sudoku grid using the backtracking technique:
  - Finds an empty cell in the grid.
  - Tries numbers from 1 to 9 in the empty cell.
  - Checks if placing a number is valid using `isValid()`.
  - If valid, recursively attempts to solve the rest of the grid.
  - If unable to solve with a number, backtracks by resetting the cell and trying the next number.
  - Stops when the entire grid is filled correctly or when no solution is possible.

- **generate()**: Utilizes `solve()` to generate a Sudoku puzzle with a unique solution:
  - Solves a completely filled Sudoku grid.
  - Randomly removes numbers while ensuring the puzzle remains solvable with a unique solution.
  - Adjusts the number of clues (given numbers) to make the puzzle challenging but solvable.

This backtracking algorithm ensures that the Sudoku puzzles generated are valid and have a unique solution, providing an engaging experience for users.

