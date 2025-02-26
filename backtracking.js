import { canPlaceWord, placeWord } from "./wordsplace.js";

export function backtrackWithUniquenessCheck(grid,  placements, remainingWords, placementIndex, solutionFoundCallback) {
    if (remainingWords.length === 0) return solutionFoundCallback(grid.map(row => row.join('')).join('\n'));
    if (placementIndex >= placements.length) return false; // No more placements to try

    const placement = placements[placementIndex];
    const gridCopy = grid.map(row => [...row]);

    for (let i = 0; i < remainingWords.length; i++) {
        const word = remainingWords[i];

        if (canPlaceWord(grid, word, placement)) {
            placeWord(grid, word, placement);
            const updatedRemainingWords = [...remainingWords];
            updatedRemainingWords.splice(i, 1);

            const shouldStop = backtrackWithUniquenessCheck(
                grid,
                placements,
                updatedRemainingWords,
                placementIndex + 1,
                solutionFoundCallback
            );

            if (shouldStop) return true;

            for (let j = 0; j < placement.length; j++) {
                const cell = placement.cells[j];
                grid[cell.row][cell.col] = gridCopy[cell.row][cell.col];
            };
        };
    };

    return backtrackWithUniquenessCheck(
        grid,
        placements,
        remainingWords,
        placementIndex + 1,
        solutionFoundCallback
    );
};