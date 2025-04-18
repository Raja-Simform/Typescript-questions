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




// function typesafe<Type>(args:Type[]){
//        if(args.length!==0){
//         return args[0];
//        }

// }
// console.log(typesafe([{"hello":6,90:80},{45:20,89:24}]))



// function improved(func){
//   return (args)=>{
//     return func()
//   }
// }

// const add = (arg1:number, arg2:number) => {
//   return arg1 + arg2;
// };
// const sub=(arg1:number, arg2:number)=>{
//   return arg1-arg2;
// };
// const mul=(arg1:number, arg2:number)=>{
//   return arg1*arg2;
// };
// const func=(arg1:string,arg2:string)=>{

// }

// function container<type extends (...args:any[])=>any>(func:type){
//   let map = new Map();
 
//   return function memo(...args){
//     let str=args.toString();
//     if(map.has(str)){
//       console.log(map.get(str));
//     }
//     else{
//        map.set(str,func(...args))
//        console.log(map.get(str));
//     }
    
    
//   }
 
// }

// const memoedAdd=container(add);
// const memoedSub=container(sub);
// const num=container(func);
// // memoedMul=container(mul);
// memoedAdd(1,2);
// memoedAdd(1,2);
// memoedAdd(5,2);
// memoedSub("hello","hello");
// // memoedMul(5,2);



 
