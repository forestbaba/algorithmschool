const anagram =(ele1,ele2)=>{

    if(ele1.length !== ele2.length){
        return false;
    }

    let answer ={}

    for(let i=0; i<ele1.length; i++){
        answer[ele1[i]] ? answer[ele1[i]] +=1 : answer[ele1[i]]=1;
    }
   
    
    for(let i=0; i < ele2.length; i++){

        if(!answer[ele2[i]]){
            return false;
        }else{
            answer[ele2[i]] -=1
        }
    }
   return true
}

let str1 ='home'
let str2 = 'emoh'
console.log('==The prod: ', anagram(str1, str2))