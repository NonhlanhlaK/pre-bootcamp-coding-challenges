function printCommonChar(word1, word2) {
    var result = '';
    for (a = 0; a < word1.length; a++) {
        if (word2.indexOf(word1[a]) !== -1){
            if (result.indexOf(word1[a]) == -1){
                result += word1[a];
            }
        }
    }
    return result
}

console.log(printCommonChar())