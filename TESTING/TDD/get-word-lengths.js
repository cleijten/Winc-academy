const getWordLengths = function(someWords) {
    const map1 = someWords.map(x => x.length);
    return map1;
};

module.exports = getWordLengths;