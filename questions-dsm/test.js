// function groupBy<T>(arr:Array<T>,func:(args:T)=>any){
//     const map=new Map<ReturnType<typeof func>,Array<T>>();
//     let temp=0;
//     for(let i=0;i<arr.length;i++){
//        temp=func(arr[i]);
//        if(map.has((temp))){
//         let newarray=map.get((temp));
//          if(newarray){
//             newarray.push(arr[i]);
//             map.set((temp),newarray);
//          }
//        }
//        else{
//          map.set((temp),[arr[i]]);
//        }
//     }
//     console.log(map);
//  }
//  groupBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n);
//  groupBy([6.1, 4.2, 6.3], Math.floor);
//...............................................>
// Implement a function compose that takes multiple functions as arguments and returns a new function that applies those functions in reverse order. The output of one function becomes the input of the next function, creating a chain of function compositions.
// If there are no functions passed to the compose function, the default behavior is to return a new function that simply returns the input it receives. In other words, the default behavior of compose without any functions results in a simple identity function.
// You may assume that all the functions accept a single parameter.
// const add1 = (num:number) => num + 1;
// const double = (num:number) => num * 2;
// const subtract10 = (num:number) => num - 10;
// type fn=(a:number)=>number;
// function compose(...args:fn[]){
//     return function(num:number){
//      if(args.length===0){
//             return num;
//      }
//      else{
//        let a=args.reverse().reduce((sum,current)=>{
//               return current(sum);      
//       },num)
//       return a;
//      }
//     }
// }
// const composedFn = compose(subtract10, double, add1);
// console.log(composedFn(3))// (3 + 1) * 2 - 10 => -2
//----------------------------------->
// :<ReturnType<typeof func>,number>
// function countBy<T>(arr:Array<T>,func:(args:T)=>any){
//        const obj:Record<ReturnType<typeof func>,number>={};
//        for(let a in arr){
//              let b=func(arr[a]); 
//              if( obj[b]){
//               obj[b]++;
//              }
//              else{
//               obj[b]=1;
//              }
//        }
//        console.log(obj);
// }
// countBy([6.1, 4.2, 6.3], Math.floor);
// // => { '4': 1, '6': 2 }
// countBy([{ n: 3 }, { n: 5 }, { n: 3 }], (o) => o.n);
// // => { '3': 2, '5': 1 }
function ImmutableList(arr) {
    var arr1 = arr;
    console.log(arr1);
    var obj = {
        push: function (num) {
            arr1.push(num);
            return obj;
        },
        map: function (clbk) {
            //    console.log(arr1.map(clbk));
            var arr2 = arr1.map(clbk);
            return ImmutableList(arr2);
        },
        filter: function (clbk) {
            console.log(arr1);
            arr1 = arr1.filter(clbk);
            return obj;
        },
        value: function () {
            return arr1;
        }
    };
    return obj;
}
console.log(ImmutableList([1, 2, 3]).push(4).map(function (x) { return x * 2; }).filter(function (x) { return x > 5; }).push(100).map(function (x) { return x + " <-"; }).value());
