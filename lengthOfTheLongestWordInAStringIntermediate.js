const lengthOfthelongestWord = str =>{
return str.split(" ").reduce((x, y) =>{

    console.log('==X: ', x)
    console.log("==Y: ", y)
    return Math.max(x, y.length);
},0)

}

console.log("Longest length: ", lengthOfthelongestWord("In the making of the word"))