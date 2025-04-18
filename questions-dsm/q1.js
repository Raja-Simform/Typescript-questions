// function typesafe<T extends Object, Key extends keyof T>(obj:T,key:Key):T[Key]{
//     return obj[key];
// }
// let ex={
//     a:20,
//     hello:150
// }
// console.log(typesafe(ex,'a'));
function addEventListener(event, data) {
    console.log(data);
}
addEventListener('click', { x: 1, y: 2 });
