// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

let ages:number[]=[];


// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

let gameboard:string[][]=[[]];


// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}
type Product={
    name:string,
    price:number

}
let product:Product={name: "coffee mug", price: 11.50}
console.log(product);


// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices


function getTotal(products:Product[]):number{
    let sum=0;
    for(let i=0;i<products.length;i++){
        sum+=products[i].price;
    }
    return(sum)
}
console.log(getTotal([
    {name: "coffee mug", price: 11.50},
    {name: "coffee mug", price: 11.50},
    {name: "coffee mug", price: 11.50}

]))