const longestWordInAString = arr=>{


    let splittedArray = arr.split(" ");
    console.log('===>', splittedArray)
    let longestWord = splittedArray[0];
    for(let i=0; i< splittedArray.length; i++){
            

        if(splittedArray[i].length > longestWord.length){
            longestWord = splittedArray[i];
        }
        

    }
    console.log('The longest word is : ', longestWord);
        return longestWord;
}

longestWordInAString('After all said and done, The end will finally justify the means');