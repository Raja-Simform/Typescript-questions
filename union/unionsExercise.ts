// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean

let highScore:number|boolean=500;

console.log(highScore);

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)

let stuff:number[]|string[]=[5,4,8,7];
console.log(stuff);


// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"


let SkillLevel:"Beginner"|"Intermediate"|"Advanced"|"Expert";
SkillLevel="Beginner";

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)

type SkiSchoolStudent={
    name:string,
    age:number,
    sport:"sli"|"snowboard",
    level:"Beginner"|"Intermediate"|"Advanced"|"Expert";
}

// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number


type RGB={
   r:number,
   g:number,
   b:number
}
// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number

type HSL={
    h:number,
    s:number,
    l:number
}
// Create an array called colors that can hold a mixture of RGB and HSL color types

let colors:(RGB|HSL)[];
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet (string:string|string[]){
        if(typeof(string)=="string"){
            console.log(`Hello, ${string}`);
        }
        else{
            for(let i=0;i<string.length;i++){
                console.log(`Hello, ${string[i]}\n`);
                
            }
        }
};
greet(["raja","dhruv","krushna"])

export {}
