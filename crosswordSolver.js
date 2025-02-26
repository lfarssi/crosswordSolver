import { backtrackWithUniquenessCheck } from './backtracking.js';
import { findWordPlacements } from './findplacements.js';
import { validPuzzle, validWords, validStart } from './validinput.js';

function crosswordSolver(puzzle, words) {

    if (!validPuzzle(puzzle) || !validWords(words) || !validStart(words, puzzle)) return console.log("Error");


    const grid = puzzle.split('\n').map(row => row.split(''));

    const wordPlacements = findWordPlacements(grid);


    wordPlacements.sort((a, b) => b.length - a.length);


    const solutionGrid = grid.map(row => [...row]);


    let firstSolution = null;
    let multipleSolutions = false;

    backtrackWithUniquenessCheck(solutionGrid, wordPlacements, [...words], 0,
        (solution) => {
            if (!firstSolution) {
                firstSolution = solution;
            } else {
                multipleSolutions = true;
                return true; 
            }
            return false; 
        }
    );


    return !firstSolution || multipleSolutions ? console.log("Error") : console.log(firstSolution);
};



const puzzle = '2001\n0..0\n1000\n0..0'
const words = ['casa', 'alan', 'ciao', 'anta']

crosswordSolver(puzzle, words)