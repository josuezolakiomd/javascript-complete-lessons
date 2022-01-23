/*
  ## All About Functions

  Functions is simply a piece of code that we can reuse 
  over and over again in our code.

*/

// Declaring a function: For use it we need to call or invok it!

function logger() {
  console.log('This is my first function...');
}

// Calling or Invoking a funtion
// logger();

// Every function can recive parameters

function fruitProcessor(apples, oranges) {
  return `Juice with ${apples} apples and ${oranges} oranges`;
}

// When we're calling a function we need to type also the Arguments

const mondayJuice = fruitProcessor(54, 61);
const tuesdayJuice = fruitProcessor(23, 21);

// console.log(mondayJuice, tuesdayJuice);

/*
  DRY Principle - Don't Repeat Yourself
  It's means that we should not repeat ourselves
*/

/* 
  ## Function Declaration vs Expressions 

  3 Ways to Write a Function

  Function Declaration
*/

function calcAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

const zolakiosAge = `Josue Zolakio has ${calcAge(2000)} years old!`;

console.log(zolakiosAge);

/* Second Way Function Expression: Anonymous Function.
   Store It in a variable! 

   Function Expression: Produce value that's why
    we need to store it in a variable
*/

const calcAge1 = function (birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
};

const age1 = calcAge1(1998);

console.log(age1);

/* 
  What's the big diference between Function Declaration 
  and Function Expression?

  Is that we can actually call function declarations before they are defined
  or initialized in the code. 

*/
