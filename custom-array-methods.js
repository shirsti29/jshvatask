    //MAP() METHOD:

// let arr = [5,10,3,2]
// // console.log(arr)
// let a =arr.map((value, index , array)=>{
//   console.log(value, index, array)
//   // return value + 1
//   return value + index
// })
// console.log(a)




      //FILTER()  METHOD:
    
// let arr = [45, 23, 21, 0, 3 ,5]
// let a = arr.filter((a)=>{
//   return a<10
// })
// console.log(a)




//         //forEachArray Function:

// function forEachArray(arr, callback){
//     for (let i =0; i<arr.length; i++){
//         callback(arr[i], i, arr);//for passing the element, index, and array to the callback
//     }
// }

// let numbers = [1, 2, 3, 4, 5];

// forEachArray(numbers, function(element, index, array) {
//   console.log(`Element: ${element}, Index: ${index}, Array: [${array}]`);
// });


// const numbers = [5, 7, 3, 9, 1, 4];
// function printElement(element, index) {
//   console.log(`Element at index ${index}: ${element}`);
// }
// forEachArray(numbers, printElement);







        //mapArray Function:

// function mapArray(arr, callback){
//   const result = [];
//   for (let i=0; i<arr.length; i++){
//     result.push (callback(arr[i], i ,arr));
//   }
//   return result;
// }


// let numbers = [3, 6, 5, 9, 1]
// let doubled = mapArray(numbers, function(element){
//   return element*2;
// });
// console.log (doubled);







          //filterArray Function:

function filterArray (array, callback){
  const result = [];
  for (let i=0; i< array.length ; i++){
    if (callback (array[i], i, array)){
      result.push (array[i]);
    }
  }
  return result;
}

const numbers = [2, 5 , 1, 6 ,3]    
function isEven (numbers){
  return  numbers % 2==0;
}
const evenNumbers = filterArray(numbers, isEven);
console.log (evenNumbers);