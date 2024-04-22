const user = {
    username :"shivam kumar",
    price :999,

    welcomemessage :function (){
        console.log('${this.username},welcome to website');
        console.log(this);
    }
}

user.welcomemessage()
user.username ="shivam"
user.welcomemessage()

console.log(this);

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()