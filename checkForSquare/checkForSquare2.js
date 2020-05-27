const checkForSquare =(arr1, arr2)=>{

    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i=0; i< arr1.length;i++){
        console.log('Ele: i',i )
        let indexOfItem = arr2[i].indexOf( arr1[i] ** 2)
        console.log('>: ', indexOfItem)
        if(indexOfItem === -1){
            return false;
        }
        arr2.splice(indexOfItem, 1)
    }
    return true;
}

let arr1 =[1,2,3]
let arr2 = [1,4,9]
console.log('result is: ',checkForSquare(arr1, arr2))