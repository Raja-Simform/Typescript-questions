// // Identify and solve the error in this snippet.
// const obj = { name: "Vijay Shankar", details: { age: 35 } };

// type x=keyof(typeof obj);

// for (const i in obj) {
// //     if (typeof obj[i] === 'object') {
// //         // other code...
// //     }
//        const j= i as x;
//        if(typeof obj[j] === 'object'){

//        }
//        console.log(i);
// }
interface Employee {
       name: string;
       age: number;
       position: string;
  
}
interface Employee2  {
       name2: string;
       age2: number;
       position2: string;
}
 
class Manager implements Employee {
       name: string;
       age: number;
       position: string;
       class1:string
       
       constructor(name: string, age: number, position: string,class1:string) {
           this.name = name;
           this.age = age;
           this.position = position;
           this.class1=class1;
       }
}
   class Manager1 implements Manager {
       name: string;
       age: number;
       position: string;
       
       constructor(name: string, age: number, position: string) {
           this.name = name;
           this.age = age;
           this.position = position;
       }
   }