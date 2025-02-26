// Find all possible word placements in the grid
export function findWordPlacements(grid){
    const wordPlacements = [];

    // Horizontal placement
    for (let row = 0; row < grid.length; row++) {
        let col = 0;
        while (col < grid[row].length) {
            if (grid[row][col] !== '.') {
                let wordLength = 0;
                while (col + wordLength < grid[row].length && grid[row][col + wordLength] !== '.') {
                    wordLength++;
                };

                if (wordLength > 1) {
                    wordPlacements.push({
                        direction: 'horizontal',
                        row,
                        col,
                        length: wordLength,
                        cells: Array(wordLength).fill().map((_, i) => ({ row, col: col + i }))
                    });
                };
                col += wordLength; // Skip to next part of the row
            } else {
                col++;
            };
        };
    };

    // Vertical placement
    for (let col = 0; col < grid[0].length; col++) {
        let row = 0;
        while (row < grid.length) {
            if (grid[row][col] !== '.') {
                let wordLength = 0;
                while (row + wordLength < grid.length && grid[row + wordLength][col] !== '.') {
                    wordLength++;
                };

                if (wordLength > 1) {
                    wordPlacements.push({
                        direction: 'vertical',
                        row,
                        col,
                        length: wordLength,
                        cells: Array(wordLength).fill().map((_, i) => ({ row: row + i, col }))
                    });
                }
                row += wordLength; // Skip to next part of the column
            } else {
                row++;
            };
        };
    };
    return wordPlacements;
};