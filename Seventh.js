//primitive
//7 types :string,no.,bool,null,undefined.symbol,bigint
//reference OR non preemtive

//array,objects functions  <=>

const name ="Shivam"
const repo =50

//console.log(name+repo +"kldsmkl");

console.log(`Hello my name is ${name} and my repo are ${repo}`);

const gamename = new String('shivam')
console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('h'));


const newstring =gamename.substring(0,4)
console.log(newstring);

const anotherString =gamename.slice(-3,4)
console.log(anotherString);

const newstringo ="   shivam   "
console.log(newstringo);
console.log(newstring.trim());

const url="https://shivam.com"
console.log(url.replace('%20','-'));
console.log(url.includes('s'));