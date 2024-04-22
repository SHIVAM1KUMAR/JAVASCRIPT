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