// function curry(func: Function): Function {
//     const totalArgs = func.length; //total number of function's arguments
//     return function curried(...newArgs: unknown[]) {
//       if (newArgs.length >= totalArgs) {
//         return func.apply(this, newArgs);
//       } else {
//         return curried.bind(this, ...newArgs);
//       }
//     };
//   }
 

class c{
    car(){}
}
// interface i extends c{

// }
interface i {
  bike(){};
}
interface i implements c{
   
}