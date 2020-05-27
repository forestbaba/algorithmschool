const reverseString = str=>{
    let string = str.split('').reverse().join('')
    return string;

}
console.log('Reverse: ',reverseString("elemento"))