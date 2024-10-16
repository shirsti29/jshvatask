// function higherOrderFunction (num, callback){
//     return callback (num);
// }
// function double (num){
//     return num*2;
// }
// console.log(higherOrderFunction(3, double));



//## Define Callback Function and Call Higher Order Function:

// function callbackFunction (callback){
//     const num=7;
//     callback(num);
// }
// callbackFunction(function(num){
//     console.log(num);
// });

            // OR

// function higherOrderFunction(num,callback){
//     callback(num);
// }
// function callbackFunction(number){
//     console.log(number);
// }
// higherOrderFunction(5,callbackFunction);




// ## Call Higher Order Function with a Function Expression as Callback:

// function higherOrderFunction(num, callback){
//     callback(num);
// }

// higherOrderFunction(7, function(number){
//     console.log(number);
// });



// ##Callback to Log Square of the Number:
// function higherOrderFunction (num, callback){
//     callback(num);
// }
// higherOrderFunction(4, function(number){
//     console.log(number*number);
// })




// ##Callback to Log Sum of Two Numbers:

// function higherOrderFunction(num1, num2, callback){
//     callback(num1, num2);
// }
// higherOrderFunction(3,7, function(a,b){
//     console.log(a+b);
// })


// function lastNRevert(text, n){
//     const lastNchar = text.slice(-n);
//     return lastNchar.split('').reverse().join('');
// }
// const result= lastNRevert();
// console.log (result);
// export { lastNRevert };


// function lastNRevert(text, n) {
//     let reversedtext=" ";
//     let startindex = text.length - n;

//     for (let i=startindex; i<last.length; i++){
//         reversedtext=text[i] + reversedtext;
//     }
//     return reversedtext;
// }
// const result=lastNRevert();


function getBiggestNumberInArrays(numbers1, numbers2) {
    const max1=Math.max(numbers1);
    const max2=Math.max(numbers2);

    return Math.max(max1,max2)
}

console.log(getBiggestNumberInArrays(3,2,5  , 4,7,8));












