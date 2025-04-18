//const [open, setOpen] = useState()
/**
* create useState function who accepts any kind of argument
your function should maintain variable that holds the passed value.
you need to create a function who accepts same type of value as passed OR
function who receives same tyoe of argument and returns same type of value
*/
//const [filters, setFilters] = useState<boolean>(defaultFilters)
// type of filters is boolean
// type of setFilters is (args:boolean| (args:boolean)=>boolean )=>void
// if user calls function then you need to update your variable
/**
Implement a function that accepts a callback and restricts its invocation to at most once. Subsequent calls of the function will return the result of the first invocation of the callback function. The callback function is invoked with the this binding and arguments of the created function.
*/
// function once<T,U>(clbk:(...args:T[])=>U){
//     let count=0;
//     let ans:U; 
//     return function(...args:T[]){
//           if(count===1){
//             console.log(ans);
//             return;
//           }
//           count++;
//           ans=clbk(...args);
//           console.log(ans);
//     }
// }
function once(clbk) {
    var count = 0;
    var ans;
    function create() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (count === 1) {
            console.log(ans);
            return;
        }
        count++;
        ans = clbk.apply(void 0, args);
        console.log(ans);
    }
    return create;
}
function incrementBy() {
    var value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        value[_i] = arguments[_i];
    }
    return value;
    // return Math.floor(Math.random()*10);
}
var incrementByOnce = once(incrementBy);
incrementByOnce(5, 5, 4, 5, "raja"); // 2
incrementByOnce(6); // 2
incrementByOnce(7); // 2
incrementByOnce(8); // 2
/*The intersectionBy function takes an iteratee function and multiple arrays as arguments. It creates an array of unique values that are included in all given arrays based on the result of applying the iteratee function to each value. The order and references of result values are determined by the first array. Note that the values returned are the values before the iteratee function is applied, while the comparison is based on the values after the iteratee function is applied.*/
// function intersectionBy<T>(func:(a:T)=>T,arr1:T[],arr2:T[]){
//         let ans:T[]=[];
//         arr1.filter((num)=>{
//             let num1=func(num);
//             arr2.filter((num2)=>{
//                 if(func(num2)===num1){
//                    ans.push(num);
//                 }
//             })
//         })
//         return ans;
// }
// Get the intersection based on the floor value of each number
// const result = intersectionBy(Math.floor, [1.2, 2.4], [2.5, 3.6]); // => [2.4]
// console.log(result);
// // Get the intersection based on the lowercase value of each string
// const result2 = intersectionBy(
//   (str) => str.toLowerCase(),
//   ['apple', 'banana', 'ORANGE', 'orange'],
//   ['Apple', 'Banana', 'Orange'],
// );
// console.log(result2);
// => ['apple', 'banana', 'ORANGE']
/*The intersectionWith function takes a custom comparator function and multiple arrays as arguments. It compares the elements of the arrays using the comparator function to determine equality. The function returns a new array containing the elements that are present in all given arrays.*/
// const arr1 = [
//     { x: 1, y: 2 },
//     { x: 2, y: 3 },
//   ];
//   const arr2 = [
//     { y: 2, x: 1 },
//     { x: 3, y: 4 },
//   ];
//   function intersectionWith<T>(func:(a:T,b:T)=>boolean,arr1:T[],arr2:T[]){
//     let arr:T[]=[];     
//         // for(let i=0;i<arr1.length;i++){
//         //     for(let j=0;j<arr2.length;j++){
//         //         if(func(arr1[i],arr2[i])){
//         //            arr.push(arr1[i]);
//         //            break;
//         //         }
//         //     }
//         //     continue;
//         // }
//         // return arr;
//         arr1.filter((num1)=>{
//             arr2.filter((num2)=>{
//              if(func(num1,num2)){
//                 arr.push(num1);
//                 arr2.shift();
//              }     
//             })
//         });
//         return arr;
//   }
//   const result = intersectionWith(
//     (a, b) => a.x === b.x && a.y === b.y,
//     arr1,
//     arr2,
//   ); // => [{ x: 1, y: 2 }]
// console.log(result);
/*
Implement a function that accepts two promises and returns a single Promise. This returned promise fulfills when both input promises fulfill, with a single value according to the order and types of the fulfillment values:

Numbers should be added together.
Strings should be concatenated.
Arrays should be combined into a single array.
Plain objects should be merged into a single object.
Other types aren't supported.
The return promise can also be rejected if one of the following happens:

The types of the fulfilled results do not match, reject with the string 'Unsupported data types'.
One of the promises fail, reject with the rejected promise's reason.
*/
// await promiseMerge(Promise.resolve(1), Promise.resolve(2)); // 3
// await promiseMerge(Promise.resolve('abc'), Promise.resolve('def')); // 'abcdef'
// await promiseMerge(Promise.resolve([1, 2, 3]), Promise.resolve([4, 5, 6])); // [1, 2, 3, 4, 5, 6]
// await promiseMerge(Promise.resolve({ foo: 1 }), Promise.resolve({ bar: 2 })); // { foo: 1, bar: 2}
// await promiseMerge(Promise.resolve(1), Promise.resolve([])); // Rejected with 'Unsupported data types'
// await promiseMerge(Promise.reject(1), Promise.resolve(2)); // Rejected with 1
