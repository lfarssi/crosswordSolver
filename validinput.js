let conditions = {
    array: Array.isArray,
    lowercase: (str) => /^[a-z]+$/.test(str),
    puzzlepattern: (str) => /^[0-9.\n]+$/.test(str),
    string: (str) => typeof str === "string",
};

export const validPuzzle = (puzzle) => conditions.puzzlepattern(puzzle);

export const validWords = (arr) => {
    if (!conditions.array(arr)) {
        return false;
    }

    return arr.every(word =>
        conditions.string(word) && conditions.lowercase(word)
    );
};


