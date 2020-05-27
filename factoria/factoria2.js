const factoria = num => {

    let result =1;
    for(let i=num; i> 0; i--){
         result *= i
    }
    return result;
}

console.log('Factoria: >> ', factoria(20))