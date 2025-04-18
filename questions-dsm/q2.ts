
// function logMessage(level: "info" | "error", message: string) {
//     console.log(`[${level.toUpperCase()}] ${message}`);
//   }
// function safeLog(...args:Parameters<typeof logMessage>):void {
//     logMessage(...args);
// }
// function safeLog(...args:["info"|"error",string]):void {
//     logMessage(...args);
// }







// type User = {
//     id: number;
//     name: string;
//     email: string;
//     password: string;
//     role: "admin" | "user";
//   };
// type returnType=Omit<User,"password"| "role"> ;
   
//   function getSafeUser(user:User):returnType{
//        const {role,password,...val}=user;
//        return val;
       
//   }

//   console.log(getSafeUser({
//     id:5,
//     name:"raja",
//     email:"hello@123",
//     password:"pass123",
//     role:"admin"
//   }))


