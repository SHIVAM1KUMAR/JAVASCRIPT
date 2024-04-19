//singleton
  //object.create                    

//object literal


const mysym =Symbol("key1")
const jsuser ={
    name:"shivam",
    "fullname":"shivam kumar",
    0:"kumar",
    [mysym]:"mykey1",
    age :21,
    location:"jaipur",
    email:"shivamkrADP@gmail.com",
    isloggedin:false,
    lastlogindays:["monday","saturday"]
}

console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser["fullname"])
//console.log(typeof jsuser.mysym);
console.log(jsuser[mysym])

jsuser.email="sk@jhhgsd.com"
Object.freeze(jsuser)
jsuser.email="sakjfdkaf@kjfnjk"
console.log(jsuser);

jsuser.greeting =function(){
    console.log("hello js user");
}
console.log(jsuser.greeting());

jsuser.greeting1 =function(){
    console.log('hii js user ,${this.name');
}
console.log(jsuser.greeting1());

// myarray =["h","i"]
// myarray[1]