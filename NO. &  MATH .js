//+++++++++++++++NUMBER++++++++++++++++++
const score = 400
console.log (score);
const balance = new Number (2500)
console.log(balance); 
console.log(balance.toString().length);
console.log(balance.toFixed(1));

const on =123.459
console.log(on.toPrecision(4));

const H =1000000
console.log(H.toLocaleString('en-IN'));


////////////MATHS///////////

console.log(Math)
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(5.9));
console.log(Math.min(1,2,3,4));
console.log(Math.max(1,2,3,4));
console.log(Math.random());
console.log(Math.random()*10 + 1);
const min =10
const max =30
console.log(Math.floor(Math.random() * (min - max + 1)) + min)