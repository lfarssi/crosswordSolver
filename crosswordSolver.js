import { validPuzzle, validWords }  from './validinput.js';

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
    return grid
};

console.log(crosswordSolver(emptyPuzzle,words))