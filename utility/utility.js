// type await=Awaited<string|Promise<number>>;
// interface Obj{
//     name:string,
//     age:number,
//     height:number,
// }
// ///Partial Type
// type c=Partial<Obj>;
// //---->myPartial
// type Mypartial<T>={
//     [P in keyof T]?:T[P]
// };
// type temp=Mypartial<Obj>;
//Required type
// type mytype=Parameters<typeof groupBy>
function groupBy(arr, func) {
    var map = new Map();
    var temp = 0;
    for (var i = 0; i < arr.length; i++) {
        temp = func(arr[i]);
        if (map.has((temp))) {
            var newarray = map.get((temp));
            if (newarray) {
                newarray.push(arr[i]);
                map.set((temp), newarray);
            }
        }
        else {
            map.set((temp), [arr[i]]);
        }
    }
    console.log(map);
}
groupBy([{ n: 3 }, { n: 5 }, { n: 3 }], function (o) { return o.n; });
groupBy([6.1, 4.2, 6.3], Math.floor);
