// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter(s):

// n: the number of socks in the pile
// ar: the colors of each sock
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers describing the colors  of the socks in the pile.

// Constraints

const sockMerch =(n, arr)=>{

    let i=0;
    let j = arr.length -1;
    let tracker ={}
     n=0

    for(let i=0; i< arr.length; i++){
        let element = arr[i]

        tracker[element] = (tracker[element] || 0) +1
        console.log('=1=part: ', tracker[element])
        if(tracker[element] === 2){
            n++
            delete tracker[element]
        }
        console.log('=0=part: ', tracker[element] ===3)

    }
    return n;
    console.log(tracker)
    console.log('n pairs: ',n)

    
}

let arr =[10, 20, 20, 10, 10, 30, 50, 10, 20]
console.log('The result ', sockMerch(0, arr))
