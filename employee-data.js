        //Define the Employee Class:

// class Employee{
//     constructor(name, email, age, department, position,salary){
//         this.name = name
//         this.email = email
//         this.age = age 
//         this.department = department
//         this.position = position
//         this.salary = salary
//     }
// }

// const Employee1= new Employee('Himanshi', 'him23@gmail.com', 27, 'Marketing', 'Manager', 60000);
// console.log(Employee1);





        // Add Methods to the Employee Class:

// class Employee{
//     constructor(name, email, age, department, position, salary){
//         this.name = name
//         this.email = email
//         this.age = age
//         this.department = department
//         this.position = position
//         this.salary = salary
//     }
//     introduce(){
//         console.log (`Hello, I am ${this.name}!`);
//     }
//     displaySalary(){
//         console.log(`Salary: ${this.salary}`);
//     }
// }

// const Employee1 = new Employee ('Sam', 'sam123@gmail.com', 30, 'Bussiness', 'HR',50000);
// Employee1.introduce();
// Employee1.displaySalary();





            //Create and Log employee Objects:

// class Employee{  //here constructor initialize properties with values 
//     constructor(name, email, age, department, position, salary){
//         this.name= name
//         this.email = email
//         this.age = age
//         this.department = department
//         this.position = position
//         this.salary = salary
//     }
//     introduce(){  //method
//         console.log(`Hello, I am ${this.name}`)        
//     }
//     getSalary(){  //method
//         console.log(`Salary: ${this.salary}`);
//     }
// }

//here i created employee objects
// const newEmployee = new Employee ('Shirsti','shirsti@gmail.com',20, 'Sales','Associate',5000);
// const manager = new Employee('Neo','neo29@gmail.com', 25, 'HR', 'HR Manager', 7000);

// console.log(newEmployee);
// console.log(manager);

// newEmployee.introduce() //call method to see the functionality.
// newEmployee.getSalary()

// manager.introduce();
// manager.getSalary();





            //Call Methods on employee Objects:

// class Employee{
//     constructor(name, email, age, department, role, salary){
//         this.name= name
//         this.email = email
//         this.age = age
//         this.department = department
//         this.role = role
//         this.salary = salary
//     }
//     introduce(){
//         console.log(`Hello , I am ${this.name}`)
//     }
//     getSalary(){
//         console.log(`Salary: ${this.salary}`)
//     }
// }
// here i created employee objects
// const newEmployee = new Employee('Shirsti', 'shirsti123@gmail.com', 24, 'Bussiness', 'Manager', 100000);
// const newManager = new Employee('Apurva','apurva@gmail.com',30, 'Operation','Opps',6000);

// console.log(newEmployee);
// console.log(newManager);

// newEmployee.introduce();
// newEmployee.getSalary();

// newManager.introduce();
// newManager.getSalary();





class student {
        constructor(name,email, age){
                this.studentname =name
                this.email =email
                this.age = age
        }        
}
const student1 = new student("Shirsti", "shirsti@gmail.com", 22);
console.log(student1)