// Extract only the last word 

// type GetLastWord<T extends string> =T extends `${string} ${infer R}`?GetLastWord<R>:T;

// type L1 = GetLastWord<"The quick brown fox">; // "fox"
// type L2 = GetLastWord<"Hello world">;         // "world"



// Swap First and Last Name

// type SwapName<T extends string> = T extends `${infer rest} ${infer last}`?`${last} ${rest}` :never;

// type S1 = SwapName<"John Doe">;      // "Doe John"
// type S2 = SwapName<"Alice Johnson">; // "Johnson Alice"


// given a string,reverse it and return it as type (recursion + infer)
type ReverseString<T extends string>=T extends `${infer a}${infer b}`?`${ReverseString<b>}${a}`:T;
type R1 = ReverseString<'hello'> // R1 should be 'olleh'


// given nested array, flatten it! (recursion + infer)
type FlattenOnce<T extends any[]>=T extends  Array<infer a>?a:T;
type F1 = FlattenOnce<[1, 2, [3, 4], [5]]> //F1 should be [1,2,3,4,5]


// given string, trim left spaces. (recursion + infer)
type TrimLeft<T extends string>=T extends` ${infer a}`|`${infer a} `?TrimLeft<`${a}`>:T;
type trimmed = TrimLeft<'  Hello World  '>  // type of trimmed should be "Hello World  "