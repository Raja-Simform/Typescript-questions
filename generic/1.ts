// q1

// create a generic type GetSurname that  recieves string as argument and it returns second string as type
type Names=["virat kohli","rohit sharma", "shreyas iyer"]

type GetSurname<T>= T extends `${infer first} ${infer last}`?last:never;

type IsKohli=GetSurname<Names[0]>; //"kohli"
type IsSharma=GetSurname<Names[1]>; // "sharma"
type IsIyer=GetSurname<Names[2]>; // "iyer"
 


// q2

// create a type that INFERS type of props that is returned from getServerSideProps.
const getServerSideProps = async () => {
    const res = await fetch("some-url");
    const json: { title: string } = await res.json();
    return {
      props: { json }
    }
  }
  
  type InferProps<T>=T extends Promise<infer S>?S:never;
  
  type PropsType = InferProps<typeof getServerSideProps>
  console.log(typeof getServerSideProps);
  /**
   json: {
          title: string;
      }
   */



// q3
      // TS question:
      // Create Generic GetDataValue type that inherit the type of data property

type GetDataValue<T>=T extends {data:infer val}?val:never;

type MyHello= GetDataValue<{data:"hello"}> // "hello"
type MyNumber= GetDataValue<{data:1}> // 1
type MyValidType= GetDataValue<{data:{isValid:boolean}}> // {isValid:boolean}



// q4


// make type such that if you pass "goodbye" literal type then you return "hello" literal type.else return never type
// why never? "the never type represents the type of values that never occur."
 
// type YouSayGoodbyeAndISayHello<T>= T extends 'goodbye'?'hello':never;
type IsHello=YouSayGoodbyeAndISayHello<"hello"> // hello
type IsNotHello=YouSayGoodbyeAndISayHello<true> // never



// q5

// follow-up question of above question
// if you pass "goodbye" then you should return "hello"
// else you should return "hello"


// type YouSayGoodbyeAndISayHello<T>= T extends 'goodbye'?'hello':'hello';


// q5


// follow-up question of above question
//   if you pass "goodbye" then you should return "hello"
//   if you pass "hello" then you should return "goodbye"
// if you pass anything else then you should return never

type YouSayGoodbyeAndISayHello1<T>= T extends 'goodbye'?'hello':'goodbye';
type YouSayGoodbyeAndISayHello<T>= T extends 'goodbye'|'hello'?YouSayGoodbyeAndISayHello1<T>:never;
