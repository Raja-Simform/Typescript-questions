// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameboard = [[]];
var product = { name: "coffee mug", price: 11.50 };
console.log(product);
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
function getTotal(products) {
    var sum = 0;
    for (var i = 0; i < products.length; i++) {
        sum += products[i].price;
    }
    return (sum);
}
console.log(getTotal([
    { name: "coffee mug", price: 11.50 },
    { name: "coffee mug", price: 11.50 },
    { name: "coffee mug", price: 11.50 }
]));
