import { validPuzzle, validWords } from './validinput.js';


const puzzle = `..1.1..1...
10000..1000
..0.0..0...
..1000000..
..0.0..0...
1000..10000
..0.1..0...
....0..0...
..100000...
....0..0...
....0......`
const words = [
  'popcorn',
  'fruit',
  'flour',
  'chicken',
  'eggs',
  'vegetables',
  'pasta',
  'pork',
  'steak',
  'cheese',
]


const crosswordSolver = (puzzle, words) => {
    if (!validPuzzle(puzzle) || !validWords(words)) {
        return "Error"
    };
    const grid = puzzle.split('\n').map(row => row.split(''));
    // grid.forEach(row => console.log(row.join(' ')));

    const wordDirections = [];

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            const current = grid[row][col]
            if (current !== '.' && current !== '\n') {

                if (col === 0 || grid[row][col - 1] === '.' || grid[row][col - 1] === '\n') {
                    let wordLength = 0;

                    while (col + wordLength < grid[row].length && grid[row][col + wordLength] !== '.') {
                        wordLength++;
                    }

                    if (wordLength > 1) wordDirections.push({ direction: 'horizontal', row, col, length: wordLength });
                };

                if (row === 0 || grid[row - 1][col] === '.' || grid[row - 1][col] === '\n') {
                    let wordLength = 0;

                    while (row + wordLength < grid.length && grid[row + wordLength][col] !== '.') {
                        wordLength++;
                    };

                    if (wordLength > 1) wordDirections.push({ direction: 'vertical', row, col, length: wordLength });

                }
            };
        };
    };

    // console.log("words length: ", words.length, "\nNumber of slots: ", wordDirections.length)
    words.sort((a, b) => a.length - b.length)
    wordDirections.sort((a, b) => a.length - b.length)
    // console.log("\nSorted Words:", words);
    // console.log("\nSorted Slots:", wordDirections);

    const matchedSlots = [];
    const usedWords = new Set();

    for (const slot of wordDirections) {
        for (const word of words) {
            if (word.length === slot.length && !usedWords.has(word)){
                matchedSlots.push({ word, ...slot });
                usedWords.add(word);
                break;
            };
        };

    };

    const rows = grid[0].length;
    const cols = grid.length;

    let result = Array.from({length: rows}, ()=>Array(cols).fill('.'));

    matchedSlots.forEach( ({word,direction,row,col}) => {
        for (let  i = 0 ; i< word.length; i++) {
             if (direction === 'horizontal'){
                result [row][col+i] = word[i];
             } else if ( direction === 'vertical') {
                result [row + i] [col] = word [i];
             }
        }
    });

    result = result.map(row => row.join('')).join('\n');
    return result;
    ;
}

console.log(crosswordSolver(puzzle, words))
