const lengthOfTheLongestWord = str =>{
    let splittedWords = str.split(" ");

    console.log(splittedWords, '==>1')
    if(splittedWords.length == 1){
        console.log(splittedWords, '==>2')
        return splittedWords[0].length;
    }

    if(splittedWords[0].length >= splittedWords[1]){
        splittedWords.splice(1,1)
        // console.log('When 0 > 1 : ', lengthOfTheLongestWord(splittedWords.join(' ')))
        console.log(splittedWords, '==>3')
        return lengthOfTheLongestWord(splittedWords.join(' '))
    }
    if(splittedWords[0].length <= splittedWords[1].length){
        // splittedWords.slice(1, splittedWords.length)
        console.log(splittedWords[0], '==>4`')
        console.log('When array is sliced', splittedWords.slice(1, splittedWords.length))
        return lengthOfTheLongestWord(splittedWords.slice(1, splittedWords.length).join(' '))
    }
    console.log('====>', splittedWords)
    return splittedWords[0].length;
}

console.log(lengthOfTheLongestWord("The quick brown  fox jumps over the choreography lazy fox"))