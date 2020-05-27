const frequencycount =arr =>{

    let elem ={}
    arr.forEach(item =>{

        let vari = item.toLowerCase();
        if(elem[vari]){
            elem[vari] +=1;
        }else{
            elem[vari] = 1
        }
    })
    return elem;
}

let itemArr = ["loom", "broom", "james","poom","yanix", "loom","yanix","yanix","yanix","yanix","poom", "JAMES", "proom", "poom","morps"]
console.log('==> ',frequencycount(itemArr))