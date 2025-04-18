// let movietitle:string="before sunrise";
// movietitle="arival";
// movietitle.toUpperCase();
// class Animal {
//     name = 'animal';
//     constructor() {
//       alert(this.name); // (*)
//     }
//   }
//   class Rabbit extends Animal {
//     name = 'rabbit';
//     console.log(name);
//   }
//   new Animal(); // animal
//   new Rabbit(); // animal
// function identity<Type>(arg:Type):Type{
//   return arg;
// }
// console.log(identity<number>(10));
// function identity<Type=string>(arg?:Type):Type{
//    if(arg===undefined){
//     throw new Error("error we must pass string")
//    }
//    else{
//     return arg;
//    }
// }
// identity()
function typesafe(args) {
    if (args.length !== 0) {
        return args[0];
    }
}
console.log(typesafe([{ "hello": 6, 90: 80 }, { 45: 20, 89: 24 }]));
