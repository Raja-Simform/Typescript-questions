"use strict";
// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
Object.defineProperty(exports, "__esModule", { value: true });
var highScore = 500;
console.log(highScore);
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
var stuff = [5, 4, 8, 7];
console.log(stuff);
// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
var SkillLevel;
SkillLevel = "Beginner";
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colors;
// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(string) {
    if (typeof (string) == "string") {
        console.log("Hello, ".concat(string));
    }
    else {
        for (var i = 0; i < string.length; i++) {
            console.log("Hello, ".concat(string[i], "\n"));
        }
    }
}
;
greet(["raja", "dhruv", "krushna"]);
