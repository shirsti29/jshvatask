//       Define and Populate the student Object:

// let student = {};

// student.name = "Shirsti";
// student.email = "pokhriyalshirsti@gmail.com";
// student.age = 23;

// console.log (student.name)
// console.log (student.email)
// console.log (student.age)




//          Update the student Object:

// let student = {};
// student.age = 10;
// student.name = "Shirsti";
// student.id = 67584;
// student.number = 9897207060;

// console.log (student.age);
// console.log (student.id);
// console.log (student.number);




//         Add Method and Nested Object to student:

// let student = {
//     name: "Shirsti",
//     id: 56784,
//     age: 22,
//     email: "pokhriyalshirsti@gmail.com",

//     greet: function () {
//         console.log(`Hello, ${this.name}!`);
//     },

//     address: {
//         country: "India",
//         city: "Dehradun",
//         pin_code: "248002"
//     }
// }

// student.greet();

// console.log(student.address.country);

// student.address.pin_code = "123422";

// console.log(student.address);





//      Create and Populate the friend Object:

// let friend = {
//     name: "Sukriti Bhatt",
//     age: 20,
//     email: "sukritibhatt22@gmail.com",

//     greet: function(){
//         console.log(`Hello, ${this.name}!`);
//     },
//     adress: {
//         country: "India",
//         city: "Dehradun",
//         pin_code: "234500"
//     }
// }

// friend.greet();
// // console.log(friend.adress.country);
// // friend.email = "bhattsukriti@gmail.com";
// console.log(friend)




//       Create and Populate the topper Object:

// let topper = {
//     name: "Neo",
//     age: 30,
//     email: "neo@g,ail.com",

//     greet: function(){
//         console.log(`HELLO, ${this.name}!`);
//     },

//     adress:{
//         country: "India",
//         city: "Pune",
//         pincode: "234001"
//     }
// }

// topper.greet();
// console.log(topper);




        
        // Define and Use the Student Class:
    
// class Student{
//     constructor(name,email, age, country, city, pin_code){
//         this.name = name;
//         this.email = email;
//         this.age = age;

//         this.address = {
//             country: country,
//             city: city,
//             pin_code: pin_code
//         }
//     }

//     greet(){
//         console.log(`Hello, my name is ${this.name}`);
//     }
//     getFullAddress(){
//         return`${this.address.country},${this.address.city} - ${this.address.pin_code}`;
//     }
// }
// const student1 = new Student("Shirsti", "shirsti123@gmail.com", 22, "India","Dehradun", 248001);
// student1.greet();
// console.log(student1.getFullAddress());





            // Create and Log Student Objects:

// class student{
//     constructor(name, email, age, country, city ,pincode){
//         this.name = name,
//         this.email = email,
//         this.age = age

//         this.address = {
//             country: country,
//             city: city,
//             pincode: pincode
//         }
//     }
//     greet(){
//         console.log(`Hello, my name is ${this.name} `);
//     }
//     getFullAddress(){
//         return `${this.address.country},${this.address.country} - ${this.address.country}`;
//     }
// }
// const myself= new student ('Shirsti', 'shirsti@gmail.com', 22, 'India', 'Pune', '435446');
// const friend =  new student('Niraj', 'niraj@gmail.com',24, 'India', 'Bihar', '345663' );
// const Bestfriend =  new student('Rutika', 'ritu@gmail.com',23, 'India', 'Pune', '543663' );

// console.log(myself);
// console.log(friend);
// console.log(Bestfriend);




            // Call the greet Method and getFullAddress Method on Student Objects:

// class student{
//     constructor(name, email, age, country, city, pincode){
//         this.name = name
//         this.email = email
//         this.age = age

//         this.address = {    //here i simply assigning values to the properties of that object, so no need of this.
//             country: country,   //(Using this.country, etc., would lead to undefined unless we explicitly define those properties on the class instance separately.)
//             city: city,
//             pincode: pincode

//         }
//     }
//     greet(){
//         console.log(`Hello, I am ${this.name}`);
//     }
//     getFullAddres(){w
//         return  `${this.address.country},${this.address.city},${this.address.pincode}`;
//     }
// }

// const myself = new student('Shirsti', 'shirsti@gamil.com', 23, 'India', 'Dehradun', '248001');
// const friend1= new student('Neo', 'neo@gamil.com', 24, 'India', 'Gujarat', '456766');
// const friend2= new student('Apurva', 'apurva@gamil.com', 25, 'India', 'Delhi', '334355');

// console.log(myself.greet())
// console.log(friend1.greet())
// console.log(friend2.greet())

// console.log(myself.getFullAddres())
// console.log(friend1.getFullAddres())
// console.log(friend2.getFullAddres())
