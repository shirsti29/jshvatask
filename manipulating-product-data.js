        //Define the Array of Products:

// let Products = [
//     {
//         id: 3760,
//         name: "Chocolate",
//         price: 50,
//         category: "Food"
//     },
//     {
//         id: 5060,
//         name: "Soap",
//         price: 10,
//         category: "Laundary"
//     },
//     {
//         id: 489,
//         name: "Shirt",    
//         price: 1000,
//         category: "Cloth"
//     }

// ]
// console.log(Products)





            //Define the displayProducts Function:

// function displayProducts(Products){
//     Products.forEach(Product => {
//         console.log (`${Product.name}: $${Product.price}`) ;       
//     });
// }
// displayProducts(Products);





            

            //Calculate and Display Products with Tax:

// let calculateProductsWithTax = (Products, taxRate) => {
//     let ProductsWithTax = Products.map(Product =>{ //new array with tax price.
//         let priceWithTax = Product.price + (Product.price * taxRate);
//         return{
//             id: Product.id,
//             name: Product.name,
//             priceWithTax: priceWithTax,      //limit to 2 decimal places
//             category: Product.category
//         }
//     });
//     return ProductsWithTax;
// } 
// function displayProductsWithTax (Products){
//     Products.forEach(Product => {
//         console.log(`${Product.name} (${Product.category}):  $${Product.priceWithTax}`);
//     });
// }
// let Products = [
//     {
//         id: 3760,
//         name: "Chocolate",
//         price: 50,
//         category: "Food"
//     },
//     {
//         id: 5060,
//         name: "Soap",
//         price: 10,
//         category: "Laundary"
//     },
//     {
//         id: 489,
//         name: "Shirt",
//         price: 1000,
//         category: "Cloth"
//     }

// ]

// let ProductsWithTax = calculateProductsWithTax(Products, 0.10) // tht's for 10% tax
// displayProductsWithTax (ProductsWithTax);






            

                //Filter and Display Food Products:

// let Products = [
//     {
//         id: 372089,
//         name: "Dairymilk Chocolate",
//         price: 5
//     },
//     {
//         id: 20086,
//         name: "Banana Chips",
//         price: 100
//     },
//     {
//         id: 890450,
//         name: "Maggie",
//         price: 200
//     }
// ]

// let filterFoodProducts = (Products) => {
//     let FoodProducts = Products.filter (Product => Product.category === "Food");
//     return FoodProducts;
// }
// function displayProductWithTax(product){
//     Products.forEach(Products =>{
//         console.log(`${Products.name}: $${Products.price}`)
//     })
// }

// let FoodProducts = filterFoodProducts(Products);
// displayProductWithTax(FoodProducts);   //filter food products with updated price  






                //Find Affordable Products:

// let affordableProducts = Products.filter (Product => Product.price < 10);
// let affordableProductsStrings = affordableProducts.map(Product =>{
//     return `${Product.name} - $${Product.price.toFixed(2)}`;
// });
// console.log(affordableProductsStrings);








                    //Calculate Total Price:

// let TotalPrice = 0;
// Products.forEach (Product => {
//     TotalPrice+= Product.price;
// })
// console.log ("Total Price: ", `$${TotalPrice.toFixed(1)}`);