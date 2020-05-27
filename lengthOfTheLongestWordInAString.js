

const lengthOfTheLongestWord = str =>{
    let maxLength =0;

    let splittedWords = str.split(" ");

    for(let i=0; i< splittedWords.length; i++){
        if(splittedWords[i].length > maxLength){ 
            maxLength=splittedWords[i].length 
        };

    }
    return maxLength;
}

console.log("Max length: ", lengthOfTheLongestWord("In the basis of thing, as humans, we are bond to take things beyond control"))