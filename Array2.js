const marvelheros =["thor","ironman","spiderman"]
const dc =["spiderman","flash","batmN"]
marvelheros.push(dc)
console.log(marvelheros);
console.log(marvelheros [3][1]);
const allheros = marvelheros.contact(dc)
console.log(allheros);

const allnewheros = [...marvelheros,...dc]
console.log(allnewheros);

const anotherarray =[1,2,3, [4,5,6,],7,[6,7],[4,5]]
const realanotherarray =anotherarray.flat(infinity)
console.log(realanotherarray);


console.log(Array.isArray("Shivam"))
console.log(Array.from("Shivam"))
console.log(Array.from({name:"shivam"}));

let score1 =100
let score2 =100
let score3=200

console.log(Array.of(score1,score2,score3));
