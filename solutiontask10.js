function printVowels(word) {
    var result = '';
    var vowelMatches = word.match(/[aeiou]/gi);
    for (a = 0; a < vowelMatches.length; a++) {
        result += vowelMatches[a];
    }
    return result;
}

console.log(printVowels())