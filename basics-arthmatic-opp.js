// const prompt = require('prompt-sync')()

// // function sayMyName() {
// //     console.log("H")
// //     console.log("I")
// //     console.log("T")
// //     console.log("E")
// //     console.log("S")
// //     console.log("H")
// // }

// // sayMyName()


// // function addTwoNumbers(num1, num2){
// //     console.log(num1+num2);
// // }
// // addTwoNumbers(2, 5)


// // function addTwoNumbers(num1, num2){
// //     console.log(num1+num2);
// // }
// // const result= addTwoNumbers(2, 5)
// // console.log("Result: ", result);


// // function addTwoNumbers(num1, num2){
// //     // let result = num1 + num2
// //     // return result
// //     return num1 + num2
// // }
// // const result =  addTwoNumbers(3,5)
// // console.log("Result: ", result);


// // function loginUserMessage (username){
// //     return `${username} just logged in`
// // }
// // console.log(loginUserMessage("Shirst"))

// // function loginUserMessage(username){
// //     if(username=== undefined){
// //         console.log("Please enter the username");
// //         return
// //     }
// //     return `${username} just logged in`
// // }

// // console.log(loginUserMessage("shirsti"))



// // function calculateCartPrice(...num1){
// //     return num1
// // }
// // console.log(calculateCartPrice(200,400,500))


// // function sumOftwonumbers(a,b){
// //     sum=a+b
// //     return(sum)
// // }
// // console.log(sumOftwonumbers (1,3));


// // function square(num){
// //     return(num*num)
// // }
// // console.log(square())



// // NESTED FUNCTIONS

// // function addSquares(a,b){

// //     const sa=(square(a));
// //     const sb=(square(b));

// //     function square(num){
// //         return(num*num);
// //     }
// //     return(sa+sb);
// // }
// // console.log(addSquares(1,3));

// // const square=(num)=>{ 
// //     return num*num;
// // }
// // console.log(square(4));




// // // ADVANCED FUNCTIONS CONCEPTS

// // const calculate = (a,b, operation) =>{
// //     return operation(a,b);
// // }
// // const result = calculate(3,4,  function (num1, num2){
// //     return num1+num2
// // });
// //  console.log(result);


// const calculate = (a, b, operation) => {
//     return operation(a, b);
// };
// //  method1
// const addition = calculate(3, 4, function (num1, num2) {
//     return (num1 + num2);
// });
// console.log(addition);

// // method2
// const subtraction = calculate(a, b) = a - b;
// const subResult = calculate(8, 3, subtraction);
// console.log(subResult);

// // method3
// function multiply (a,b){
//     return a*b;
// }
// const mulResult=calculate(3,2, multiply);
// console.log(mulResult);















// // BASIC ARITHEMATIC OPERATION:


// ## Define Callback Functions:

//  function addNumbers (num1, num2){
//     sum = num1 + num2;
//     return sum;
// }
// function multiplyNumbers(num1, num2){
//     mul=num1 * num2
//     return mul;
// }
// function subtractNumbers(num1, num2){
//     sub= num1 - num2;
//     return sub;
// }
// function divideNumbers(num1, num2){
//     div= num1 / num2;
//     return div ;
// }

// console.log(multiplyNumbers(2,5));
// console.log(subtractNumbers(10,4));
// console.log(divideNumbers(8,19));
// console.log(addNumbers(3,6));



function getBiggestNumberInArrays(numbers1, numbers2) {
    const array1=[];
    const array2=[];

    const max1=Math.max(numbers1);
    const max2=Math.max(numbers2);

    return Math.max(max1,max2)
}
const result = getBiggestNumberInArrays([4, 5 , 2], [3,6,,9 ]);
console.log(result);

// export { getBiggestNumberInArrays };

































