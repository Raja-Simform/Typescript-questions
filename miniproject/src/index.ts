

// async function Promise_all<T>(args:Promise<T>[]):Promise<T[]>{
//     return new Promise((resolve,reject)=>{
//       let count=0;
//       let arr:T[]=[];
//       if(args.length===0){
//           reject([]);
//       }
//       args.forEach((p,index) =>{
//           p.then((data)=>{
//               arr[index]=data;
//               count++;
//               if(count===args.length){
//                   resolve(arr);
//               }
//           })
//           .catch((error)=>{
//               console.log(error);
//               count++;
//               reject(error);
//           })
          
//       });
//     })
//   }
  
//   const p1=new Promise<string>((resolve)=>{
//       setTimeout(()=>{
//            resolve("hello")
//       },5000)
//   });
//   const p2=new Promise<string>((resolve)=>{
//      setTimeout(()=>{
//           resolve("world")
//      },2000)
//   });
//   const p3=new Promise <string>((resolve)=>{
//      setTimeout(()=>{
//           resolve("123")
//      },3000)
//   });
//   Promise_all([p1,p2,p3]).then((data)=>{
//       console.log(data);
//   }).catch((error)=>{
//          console.log(error);
//   })






  
  
  