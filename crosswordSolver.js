import { validPuzzle, validWords } from './validinput.js';

const emptyPuzzle = `2001
0..0
1000
0..0`
const words = ['casa', 'alan', 'ciao', 'anta']


const crosswordSolver = (puzzle, words) => {
    if (!validPuzzle(puzzle) || !validWords(words)) {
        return "Error"
    };
    const grid = puzzle.split('\n').map(row => row.split(''));

    const wordDirections = [];
    console.log(('Puzzle:\n', grid))
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            const current = grid[row][col]
            if (current !== '.' && current !== '\n') {
                // console.log('current place:', current);
                // console.log('row: ', grid[row]);
                // console.log('column:', grid[row][col]);

                if (col === 0 || grid[row][col - 1] === '.' || grid[row][col - 1] === '\n') {
                    let wordLength = 0;

                    while (col + wordLength < grid[row].length && grid[row][col + wordLength] !== '.') {
                        wordLength++;
                    }

                    wordDirections.push({ direction: 'horizontal', row, col, length: wordLength })
                };

                if (row === 0 || grid[row - 1][col] === '.' || grid[row - 1][col] === '\n') {
                    let wordLength = 0;

                    while (row + wordLength < grid.length && grid[row + wordLength][col] !== '.') {
                        wordLength++;
                    };

                    wordDirections.push({ direction: 'vertical', row, col, length: wordLength })

                }
            };
        };
    };
    return wordDirections;
};

console.log(crosswordSolver(emptyPuzzle, words))