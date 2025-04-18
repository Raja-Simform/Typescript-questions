// type await=Awaited<string|Promise<number>>;


interface Obj{
    name:string,
    age:number,
    height:number,
}


///-------------------->Partial Type
// type T1=Partial<Obj>;


// type Mypartial<T>={
//     [P in keyof T]?:T[P]
// };
// type Temp1=Mypartial<Obj>;


//---------------------->Required type

// type T2=Required<Obj>;


// type Myrequired<T>={
//    [P in keyof T]-?:T[P]
// }
// type temp2=Myrequired<Obj>; 


//----------------------------->Read only

// type T3=Readonly<Obj>;


// type Myreadonly<T>={
//    readonly[P in keyof T]:T[P]
// }
// type temp3=Myreadonly<Obj>


//-------------------------------->Record
// type T5="p1"|"p2";
// const T4:Myrecord<T5,Obj>={
//    p1:{name:"raja",age:55,height:60},
//    p2:{age:77,height:77}
// }

// type Myrecord<T extends keyof any,U>={
//         [P in T]:U
// }

//------------------------------------->Pick

// const T6:MyPick<Obj,"age"|"height">={
//     age:88,
//     height:88
// }
// type MyPick<T,K extends keyof T>={
//    [P in (K &  keyof T) ]:T[P]
//  }
//  type Foo = {
//    a: string
//    b: number
//    c: boolean
//  }
//  type A = MyPick<Foo, 'a' | 'b'> // {a: string, b: number}
//  type B = MyPick<Foo, 'c'> // {c: boolean}
//  type C = MyPick<Foo, 'd'> // Error

//------------------------------------------->Omit
// type MyOmit<T, K>={
//    [P in Exclude<keyof T,K>]:T[P]
// }
// type Foo = {
//    a: string
//    b: number
//    c: boolean
//  }
//  type A = MyOmit<Foo, 'a' | 'b'> // {c: boolean}
//  type B = MyOmit<Foo, 'c'> // {a: string, b: number}
//  type C = MyOmit<Foo, 'c' | 'd'>  // {a: string, b: number}

 //--------------------------------------->Exlcude
// type MyExclude<T, E> = T extends E?never:T;


// type Foo = 'a' | 'b' | 'c'

// type A = MyExclude<Foo, 'a'> // 'b' | 'c'
// type B = MyExclude<Foo, 'c'> // 'a' | 'b
// type C = MyExclude<Foo, 'c' | 'd'>  // 'a' | 'b'
// type D = MyExclude<Foo, 'a' | 'b' | 'c'>  // never

//...........................................>Extract
// type MyExtract<T, U> = T extends U?T:never;

// type Foo = 'a' | 'b' | 'c'
// type A = MyExtract<Foo, 'a'> // 'a'
// type B = MyExtract<Foo, 'a' | 'b'> // 'a' | 'b'
// type C = MyExtract<Foo, 'b' | 'c' | 'd' | 'e'>  // 'b' | 'c'
// type D = MyExtract<Foo, never>  // never

//------------------------------------->ReturnType

// type MyReturnType<T extends Function>= T extends ()=>infer R?R:never;

// type Foo = () => {a: string}
// type A = MyReturnType<Foo> // {a: string}

//------------------------------->Parameter
// type MyParameters<T extends Function>= T extends (...args:infer R)=>any?R:never;

// type Foo = (a: string, b: number, c: boolean) => string
// type A = MyParameters<Foo> // [a:string, b: number, c:boolean]
// type B = A[0] // string
// type C = MyParameters<{a: string}> // Error

//-------------------------------->non-nullable
// type MyNonNullable<T> = Exclude<T,null|undefined>
// // your code here, don't use NonNullable<T> in your code

// type Foo = 'a' | 'b' | null | undefined
// type A = MyNonNullable<Foo> // 'a' | 'b'