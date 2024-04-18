let d = new Date()
console.log(d);
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toISOString());
console.log(d.toJSON());
let D = new Date(2020,14,15)
let C = new Date(2020,14,15,5,2,4)
console.log(D.toDateString());
console.log(C.toLocaleString());

let mycreatedDate = new Date("01-1-2020")
//console.log(mycreatedDate.toLocaleString());

let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(mycreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newdate = new Date()
console.log(newdate);
console.log(newdate.getDate());
console.log(newdate.getDay());

newdate.toLocaleString('default',{
 weekday:"long"

})

