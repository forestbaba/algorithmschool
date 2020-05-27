const checkForSquare =(arr1, arr2)=>{
    if(arr1.length !== arr2.length){
        return false
    }

    let frequency1 ={}
    let frequency2 ={}

    for(let i=0; i< arr1.length; i++){
    frequency1[arr1[i]] = (frequency1[arr1[i]] || 0) + 1
    }
    for(let i of arr2){
        frequency2[i] = (frequency2[i] || 0) + 1
    }
    console.log('Obj: ', frequency2)

    for( let j in frequency1){
        if(!(j ** 2) in frequency2){
            return false;
        }
        if(frequency2[j **2 ] !== frequency1[j]){
            return false
        }
        console.log('>>>: ',frequency2[j ** 2])
        console.log('>>||>: ',frequency2)
        // if(frequency2[j **2] !== frequency1[j]){
        //     return false
        // }
    }
    return true

}

let arr1=[1,2,3,3]
let arr2 =[1,4,9,9]

console.log("Result: ", checkForSquare(arr1, arr2))