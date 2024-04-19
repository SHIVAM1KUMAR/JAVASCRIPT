const myarray =[0,1,2,3,4,5 ]
const myheros =["salman","nagaarjun"]

const myarray2 = new Array(1,2,3,4)
console.log(myarray[0]);
console.log(myheros);
console.log(myarray2);

//methods
myarray.push(6)
myarray.push(7)
myarray.pop()

myarray.unshift(9)
myarray.shift()

console.log(myarray.includes(9));
console.log(myarray.indexOf(9));

const newarr =myarray.join()

console.log(myarray);
console.log(typeof newarr);

//slice ,splice
console.log("A",myarray);
const myn1 = myarray.slice(1,3)
console.log(myn1);
console.log("B",myarray);

const myn2 = myarray.splice(1,3)
console.log(myn2);
console.log("B",myarray);