let conditions = {
    array: Array.isArray,
    isAword: (word) => word.length >= 2,
    puzzlepattern: (str) => /^[0-2.\n]+$/.test(str),
    string: (str) => typeof str === "string",
    unique: (arr) => new Set(arr).size === arr.length,
};

export const validPuzzle = (puzzle) => (conditions.string(puzzle)) && (conditions.puzzlepattern(puzzle));

export const validWords = (arr) => {
    if (!conditions.array(arr) || !conditions.unique(arr)) {
        return false;
    }

    return arr.every(word =>
        conditions.string(word) && conditions.isAword(word)
    );
};

export const validStart = (words, puzzle) => {
    const n = words.length;
    let starts = 0;

    for (let num of puzzle) {
        if (num === '1') {
            starts++;
        } else if (num === '2') {
            starts += 2;
        };

    }

    return n === starts;

};



