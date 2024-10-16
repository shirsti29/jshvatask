        //Define the Array of Cart Items:
    
let cart = [
    {
        name: "Dove Soap",
        price: 50,
        quantity: 4
    },
    {
        name: "Himalayan Shampoo",
        price: 200,
        quantity: 2
    },
    {
        name: "Chocolates",
        price: 300,
        quantity: 10
    },
    {
        name : "Chips",
        price: 100,
        quantity: 5
    }
]
// console.log(cart);






            //Define the calculateTotalPrice Function Using forEach:

// function CalculateTotalPrice (cart){
//     let totalprice = 0

//     cart.forEach(item => {
//         totalprice+= item.price * item.quantity;       
//     });
//     return totalprice; 
// }
// console.log(CalculateTotalPrice(cart));







        //Call the calculateTotalPrice Function:

function Caltotalprice (cart){
    let totalprice = 0;
    cart.forEach(item => {              //the forEach method loops is for over each item in the cart array.
        totalprice+= item.quantity * item.price
    });
    return totalprice;
}
console.log(Caltotalprice(cart));