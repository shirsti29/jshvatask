                // Calculate Average Age:

        
                //Define the Array of People:

const People = [
        {
                name: "Shirsti",
                age: 20
        },
        {
                name: "Niraj ",
                age: 24
        },
        {
                name: "Apurva",
                age: 19
        },
        {
                name: "Sukriti",
                age: 5
        }
]
// console.log(People);





                // Define the calculateAverageAge Function Using forEach:

// function AverageAge(People){
//         let totalAge = 0;

//         People.forEach(person => {
//                 totalAge+= person.age;     //sum of ages
//         });

//         const AverageAge= totalAge/People.length;

//         return AverageAge;
// }

// const Average = AverageAge(People);
// console.log("Average Age: ", Average);



 

                //Call the calculateAverageAge Function:

function AverageAge(People){
        let totalAge = 0
        People.forEach(person => {
                totalAge+=person.age;
        });
        const AverageAge = totalAge/People.length;
        return AverageAge;
}
const Average = AverageAge(People)
console.log("Average age: ", Average);


