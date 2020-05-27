const anagram =(str1, str2)=>{
    if(str1.length !== str2.length){
        return false;
    }

    let stren ={}
    for(let i=0; i< str1.length; i++){

        let char = str1[i]
        stren[char] = stren[char] ? stren[char] +=1 : stren[char] =1;
    }

    for(let i=0; i< str2.length; i++){
        let char = str2[i]
        if(!stren[char]){
            return false
        }else{
            stren[char] -1
        }
    }
    return true
}

console.log("The Anagram ==>",anagram("lol",'lol'))