const mergeArray =(arr1, arr2)=>{
 return   arr1.map((item, index) =>{
        return item[index] = " "+ arr2[index]
    })
}

let arr1=[1,2,3,4,5]
let arr2=['a','b','c','d','e']
console.log('The result', mergeArray(arr1, arr2))