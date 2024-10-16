// SINGLETON WITH THE HELP OF CONSTRUCTOR:

//const tinderUser = new Object()
const tinderUser = {} //same 

tinderUser.id = "123abc"
tinderUser.name = "Shirsti"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "shirsti@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Shirsti",
            lastname: "Pokhriyal"
        }
    }
}
// console.log(regularUser.fullname); 
// console.log(regularUser.fullname.userfullname.firstname);



const obj1 = {1: "a", 2: "b"}
const obj2 = {1: "a", 2: "b"}

const obj3 = Object.assign(obj1, obj2)
console.log(obj3);





const users = [
    {
        id: 1,
        email:"shirsti@gmail.com"
    }
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

