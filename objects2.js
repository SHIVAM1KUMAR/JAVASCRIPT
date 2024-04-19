//const tinderuser =new Object()
const tinderuser ={}

tinderuser.id ="123scv"
tinderuser.name ="sammygdab"
tinderuser.isLoggedIn =false
console.log(tinderuser)

const regularuser ={
    email:"som@gmail.com",
    fullname:{
        userfullname:{
            fn:"sh",
            ln:"kr"
       }
    }
}

console.log(regularuser.fullname);

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
const obj5 ={3:"a",4:"b"}
const obj3 ={obj1,obj2}

const obj4 =Object.assign({},obj1,obj2,obj5)
const obj ={...obj1,...obj2}
console.log(obj);

const userrs =[
{
    id:1,
    email:"jsdhjk@gmail.com"
},

{
  id: 2,
  email:"kdmwkl@gmail.com"
}
]

users[1].email
console.log(tinderusers);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnproperty('isLoggedIn'));