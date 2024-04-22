let a = 2100

if (true) {
    let a =10
    const b= 40
    console.log("inner",a,b);

}
console.log(a);

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


//+++++++++++++++++Nested ++++++++++++++++++++\\

function one (){
    const  username ="shivam"
    function two(){
        const website ="youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()


if (true) {
    const username ="shivam kumar"
    if (username === "shivam kumar") {
        const website="youtubee"
        console.log(username + website);
        
    }
    //console.log(website);
    
}
//console.log(username);

console.log(add1(5))
function add1(num){
    return num + 1
}


//console.log(add2(5))
  const add2 = function (num){
    return num + 6
}
console.log(add2(7));