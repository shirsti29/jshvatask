//  singleton
// Object.create



// object literals

// const mySym = Symbol("key1")

// const Jsuser = {
//     Name: "Shirsti",
//     "full name": "Shirsti Pokhriyal",
//     //mySym: "mykey1", // not access as a symbol. not correct syntax
//     [mySym]: "mykey1",
//     age: 22,
//     Location: "Dehradun",
//     Email: "shirstipokhriyal23@navgurukul.org" ,
//     IsLoggedIn:  false,
//     LastloginDays: ["Monday", "Saturday"]

// console.log(Jsuser.LastloginDays);
// console.log(Jsuser.mySym);
// console.log(Jsuser[mySym]);
// console.log(typeof Jsuser.mySym);
// console.log(Jsuser["full name"]);
// console.log(Jsuser);


// changing of values:

// Jsuser.Email = "pokhriyal@google.com"
// Object.freeze(Jsuser) //the value will not change like it is a permanent valuer of it.

// Jsuser.Email = "himanshi@gpt.com" //not execute due to freeze.
// console.log(Jsuser) //output: pokhriyal@google.com






// USING OF FUNCTIONS IN OBJECTS:
// Jsuser.greetings = function(){
//     console.log("Hello JS user "); 
// }
// Jsuser.greetingsTwo = function(){
//     console.log(`Hello JS user ${this.Name}`);   //string interpulation
// }


// console.log(Jsuser.greetings()) //undefined
// console.log(Jsuser.greetingsTwo()) //is not a funcion.









// let obj = {
//     a:1,
//     b: "shirsti"
// }

// console.log(obj)
//  let animal = {
//     eats: true 
// };
// let rabbit = {
//     jumps: true
// };

// rabbit._proto_ = animal;  //sets rabbit.[[prototype]] = animal









// class Animal {
//     constructor(name){
//         this.name = name;
//         console.log("Object is created...");
//     }
//     eats(){
//         console.log("Kha raha hoon");
//     }
//     jumps(){
//         console.log("Kha raha hoon");
//     }
// }

// class lion extends Animal{ // i use extend here bcz i want all the things i.e eat and jumps with the lion also.//
//     constructor (name){
//         super(name)
//         console.log("Object is created and he is a lion...")
//     }
//     eats(){
//         console.log("Kha raha hoon");
//     }
//     jumps(){
//         console.log("Kha raha hoon");
//     }
// } 

// let a= new Animal("Bunny");
// console.log(a);

// let l = new lion("Shera")
// console.log(l)









// let lecture = 10;
// let section = 3;
// let title = "Javascript";

// // declaring of objects.
// const course = {
//     lecture: 10,
//     section: 3,
//     title: "Javascript",
//     notes:{
//         introduction: "Welcome to JS course "  //nested object//
//     },
//     enroll(){
//         console.log("You are succesfully enrolled");
//     }
// }

// function enroll(){
//     console.log("You are succesfully enrolled");
// }
//course.enroll()
//console.log(course)

//course.price = 999 //shows that object is dynamic in nature.



// FACTORY FUNCTIONS

// function createCourse(title){
//     return {
//         // lecture: 10,
//         // section: 3,
//         title: title,
//         enroll(){
//             console.log("You are succesfully enrolled");
//         }
//     }
// }

// const course = createCourse("Shirsti");
// course.enroll()
// console.log(course)





// USE OF .THIS KEYWORD:

// function Person(name, age) {
//     this.name = name; // 'this' refers to the object being created
//     this.age = age;
  
//     this.greet = function() {
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     };
//   }
//   // Creating an instance of Person
//   const person1 = new Person("Alice", 25);
//   const person2 = new Person("Bob", 30);
//   // Calling the greet method
//   person1.greet(); 
//   person2.greet(); 
  









//   CONSTRUCTOR FUNCTIONS:

// function Course(title){
//     this.title = title,
//     this.enroll = function(){
//         console.log('you are successfully enrolled');
//     }
// }

// const course = new  Course('Javascript');// new keyword works as the return it automatically returns.
// console.log(course.constructor)

// // we can use return this in place of new keyword above.
// delete course.title;

// course.checkEnrollment = function(){
//     console.log('30 users are successfully enrolled');
// }
// course.enroll()
// course.log (course);



const Course_1 = new Function('title', `
this.title = title,
this.enroll = function(){
    console.log('you are successfully enrolled');
}
`)

const  course_2 = new Course_1('Javascript');











