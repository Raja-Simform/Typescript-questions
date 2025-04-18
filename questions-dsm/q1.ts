// // // function typesafe<T extends Object, Key extends keyof T>(obj:T,key:Key):T[Key]{
// // //     return obj[key];
// // // }
// // // let ex={
// // //     a:20,
// // //     hello:150
// // // }
// // // console.log(typesafe(ex,'a'));



// // /*-----> march -19 problems                    */

// // /*  q1 */


// // const fruits=["apple","banana","mango"] as const;
// // type temp=typeof fruits[number];

// // const Allfruits:temp="apple";


// // //q2   ***

// // function goToRoute<T extends `/${string}`>(path:T){
// //   return ;
// // }
// // goToRoute("https://google.com") 
// // goToRoute("/user-detail") 

// // /*  ------>>>>>>   */

// // /*  promise q1 */

// // async function fetchUser():Promise<{
// //     id:number,
// //     name:string
// // }> {
// //     return { id: 1, name: "Alice" };
// // }
// // type UserResponse=ReturnType< typeof fetchUser>



// // /* Q2 */

// // type EventMap = {
// //     click: { x: number; y: number };
// //     keypress: { key: string };
// // };
   
// // function addEventListener<T extends keyof EventMap>(event:T, data:EventMap[T]){
// //   console.log(data);
// // }
// // addEventListener('click',{x:1,y:2});



// // /* Q3 */

// // type Events={type:"click",event:MouseEvent}|{type:"focus",event:FocusEvent}|{type:"keydown",event:KeyboardEvent}
 
// // // it should be {type:"click",event:MouseEvent} from Events type. Do not hard-code it. use some utility type to extract click event type.
// // type ClickEvent=Extract<Events,{type:"click",event:MouseEvent}>
   




// // /* Q4*/
// // type Events={type:"click",event:MouseEvent}|{type:"focus",event:FocusEvent}|{type:"keydown",event:KeyboardEvent}
 
// // // exclude keydown event from Events type.
// // type NotKeyDown=Exclude<Events,{type:"keydown"}>




// // /* Q5*/
// // const fakeData={
// //     String:"Default string",
// //     Numbers:{
// //     Int:1,
// //     Float: 3.14,
// //     },
// //     Boolean:true,
// //     Id:"id"
// //    }as const;

// //    type num=typeof fakeData;
   
// //    type StringType=num["String"];//it should be same type as one from fakeData's String key
// //    type Int=num["Numbers"]["Int"] //it should be same type as one from fakeData's Numbers.Int key
// //    type Float=num["Numbers"]["Float"] //it should be same type as one from fakeData's Numbers.Float key
// //    type BooleanType=num["Boolean"] //it should be same type as one from fakeData's Boolean key
// //    type Id=num["Id"] //it should be same type as one from fakeData's Id key
   





// // //    write a typesafe function who accepts object and any property key of object. Function should returns value associated with given property key.  
      
// // type T={
// //     Key:string
// // }   
// // function ans<T,Key extends keyof T>(obj:T,key:Key):T[Key]{
// //      return obj[key];
// // }




// // // write a typesafe function who any accept object with id property and returns a id.
// // // ex.
// // interface Type{
// //     id:string;
// // }
// // function getId<T extends Type>(arg:T):T['id']{
// //   return arg.id;
// // }
 
// /*  ->>>>>>>>>>>>> 20 march */


// //>>>>>>>>>>>q1>>>>>>>>>>
// // create type that creates all possible combination of given routes
// // ex.
// type MainRoutes="users"|"licenses"|"roles"
 
// type SubRoutes="id"|"detail"
 
 
// type AllRoutes=`${MainRoutes}/${SubRoutes}`;
//     //  "users/id" | "users/detail" | "licenses/id" | "licenses/detail" | "roles/id" | "roles/detail"

// //>>>>>>>>>>>>>>>q2>>>>>>>
// // create a type where key is from AllKeys's type and value is string
// type AllKeys="userId"|"role"|"email"|"phone"|"dob"
 

// type AllWithString ={[k in AllKeys]:string}
   

// let x:AllWithString={
//     userId: "raja",
//     role: "raja",
//     email:"raja",
//     phone:"raja",
//     dob: "raja",
// }
// console.log(x);

// //>>>>>>>>>>>>>>>>q3>>>>>

// // same as previous question but all key's should be in uppercase
// type Events="log_in"|"log_out"|"sign_up";
 
// type AllEvents={[k in Uppercase<Events>]:string};
// // /**
// // {
// //     LOG_IN: string;
// //     LOG_OUT: string;
// //     SIGN_UP: string;
// // }
// // */


// //>>>>>>>>>>>q4>>>>>>>>>>>>
// // create Maybe generic type that recieves any(not typescript any, here any means any kind of type) type, and it returns actual type with null and undefined
// //  string | null |undefined

//  function check<T>(args:T):T|null|undefined{
//             return args;
//  }
// type Maybe<T>=ReturnType<typeof check<T>>

// type StringCanBe=Maybe<number> 


// //>>>>>>>>>>q5>>>>>>>>>
// // create a generic type that only accepts string and attach "/" prefix to given string
// function add(args:string){
//      return `/${args}`;
// }
// type AddPrefix<T>=ReturnType<typeof add<T>>;


// type Addd=AddPrefix<"about"> // output will be: "/about"
// // type Addd=AddPrefix<2> // ts error



/***********21march********/
/*******q1*******/
// modify createDataShape type and make it genetric so that it creates shape of {data:... , error:...} as per the received type
// ex.
type CreateDataShape<d,T extends Error>={
data:d,
error:T
}
 
type MyShape=CreateDataShape<string,TypeError> 
/*
  {data:string, error:TypeError}
*/
  type MyShape=CreateDataShape<boolean,SyntaxError>
  /*
{data:boolean, error:SyntaxError}*/
/****q2******/
// modify above question such that if no Error type is passed then defaul error type will be TypeError.

type CreateDataShape<d,T=TypeError>={
data:d,
error:T
}
  type MyShape=CreateDataShape<boolean>
  /*
  {data:boolean, error:SyntaxError}
*/

/************q3***********/
// create maybe type that receives any type(not typescript any, here any means any kind of type) except null and undefined

type Maybe<T>=NonNullable<T>;


type StringCanBe=Maybe<string>  // string | null |undefined
type ZeroCanbe=Maybe<0>  // 0 | null |undefined
type EmptyStringCanbe=Maybe<"">  // "" | null |undefined
type NullCanbe=Maybe<null>  // TS error
type UndefinedCanbe=Maybe<undefined>  // TS error

/**************q4**********/
// In below function, we recieves array of any(not typescript any) in argument, and second argument which can be any(not typescript any) type of element, and we are prepending that element into given array.
 
 
const prepend = <T,U>(args: Array<T>,pre:U):[U,...T[]]=> {
  return [pre,...args];
 
}
const arr=prepend(['1'],{department:"react"})
 
arr[0].department // works
arr[1].charAt(1)  // works 
arr[0].charAt() // error
arr[1].department // error



// in below function in argument we recieves array of any(not typescript any).
// we want to make it typesafe in such a way that typescript should throw error if array is empty.
 
type NonEmptyArray<T>=[T,...T[]];
const ourArr=(myArr:NonEmptyArray<unknown>)=>{
	console.log(myArr);
}
ourArr(["golang"]) // works
ourArr([true]) // works
ourArr([]) // ERROR
