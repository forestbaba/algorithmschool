const reverString = str =>{

    let newArr =[]
    let string = str.split('');
    string.map(item =>{

        console.log('===', string.pop)
        newArr.push(item.pop);
    })
    return string;
    
}
console.log('>>>', reverString("mate"))