const checkForSquare =(arr1, arr2)=>{
    if(arr1.length != arr2.length){
        return false;
    }
    
    for(let i=0; i< arr1.length; i++){
        let checker =Math.pow(arr1[i], 2);
        let indexOfChecker = arr2.indexOf(checker)

        if(arr2.includes(checker)){
            arr2.splice(indexOfChecker, checker)
        }else{
            return false
        }
        
       
    }
    return true;
}

let arr1 = [1,2,3]
let arr2 = [9,4,1,9]
console.log(checkForSquare(arr1, arr2))