const sorter =str =>{
    return str.split('').sort().join('');
}


let words = ["dll", "lld", "boom", "moob", "mop"]

const anagram = words=>{

    let elem = {}
    words.forEach(item =>{
        let sortedWord = sorter(item)
        console.log('>>::>> ', sorter(item))

        if(elem[sortedWord]){
            return elem[sortedWord].push(item)
        }
        elem[sortedWord]= [item]

    })
    console.log("===Full: ", elem)
    return elem

}

const groupedAnagrams = anagram(words);
for(const sortedWord in groupedAnagrams){
    console.log(groupedAnagrams[sortedWord].toString());
}
// anagram()
