interface Product {
    price :number;
    name:string;
    quantity:number;
}
const print=(product:Product):void=>{
         console.log(`${product.name} -- ${product.price}`)

}
print({
    price:15,
    name:"dhuv",
    quantity:25,
})
export{}
 