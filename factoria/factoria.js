const factoria = num =>{
    let ans = 1;

    if(num ==0){
        return 1;
    }
    if(num == 1){
        return 1;
    }
    for( let i=0; i< num; i++){
        ans = ans * num;
        num--;
        
    }
    return ans;
}

console.log('factoria: ', factoria(1))