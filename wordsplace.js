export function canPlaceWord(grid, word, placement){
    if (word.length !== placement.length) return false;

    for (let i = 0; i < word.length; i++) {
        const cell = placement.cells[i];
        const currentChar = grid[cell.row][cell.col];

        if (!/^[0-2]$/.test(currentChar) && currentChar !== word[i]) {
            return false;
        };
    };
    return true;
};

export function placeWord(grid, word, placement){
    for (let i = 0; i < word.length; i++) {
        const cell = placement.cells[i];
        grid[cell.row][cell.col] = word[i];
    };
};
