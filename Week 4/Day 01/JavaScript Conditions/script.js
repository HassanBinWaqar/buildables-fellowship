console.log("Hello, World!");

let myAge = 25;

if (myAge >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

//arithmetic operators
let a = 2;
let b = 2;
let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division
let remainder = a % b; // Modulus
let exponent = a ** b; // Exponentiation

// Displaying the results
console.log("Results of operations:");
console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Remainder: " + remainder);
console.log("Exponent: " + exponent);

//Assignment operators
let x = 100;
x += 5; // x = x + 5
x -= 3; // x = x - 3
x *= 10; // x = x * 10
x /= 4; // x = x / 4
x %= 2; // x = x % 2
x **= 3; // x = x ** 3

// Displaying the final value of x
console.log("Final value of x: " + x);

// Comparison operators
let num1 = 10;
let num2 = 20;
console.log("Is num1 equal to num2? " + (num1 == num2)); // Equality
console.log("Is num1 not equal to num2? " + (num1 != num2)); // Inequality
console.log("Is num1 greater than num2? " + (num1 > num2)); // Greater than
console.log("Is num1 less than num2? " + (num1 < num2)); // Less than
console.log("Is num1 greater than or equal to num2? " + (num1 >= num2)); // Greater than or equal to
console.log("Is num1 less than or equal to num2? " + (num1 <= num2)); // Less than or equal to

//Increment and Decrement Operators
let count = 0;
count++; // Increment by 1
console.log("Count after increment: " + count);
count--; // Decrement by 1
console.log("Count after decrement: " + count);
--count; // Pre-decrement
console.log("Count after pre-decrement: " + count);
count++; // Post-increment
console.log("Count after post-increment: " + count);

let value = 10;
console.log("Value : " + value--); // Decrement value by 1
console.log("Value after decrement: " + value); // Display value after decrement

//JavaScript Rappels
//Rappels is Read evaluate print loop
//It is a simple interactive computer programming environment that takes single user inputs, executes them, and
//returns the result to the user. It is a simple way to test code snippets and see immediate results.
//Rappels is a great way to learn JavaScript and test code snippets quickly. It allows you to experiment with code and see the results immediately without having to create a full program or script.
//You can use Rappels to test small pieces of code, debug issues, and learn new concepts in JavaScript.

//Loigical Operators
let isAdult = true;
let hasPermission = false;
let canAccess = isAdult && hasPermission; // Logical AND
console.log("Can access: " + canAccess); // false
let canAccessOr = isAdult || hasPermission; // Logical OR
console.log("Can access (OR): " + canAccessOr); // true
let isNotAdult = !isAdult; // Logical NOT
console.log("Is not adult: " + isNotAdult); // false

//Conditional (Ternary) Operator (Write if else statement in one line);
let age = 16;
let canVote = age >= 18 ? "You can vote." : "You cannot vote.";
console.log(canVote); // You cannot vote.

/*
this translates to:
if (age >= 18)
 {
    canVote = "You can vote.";
} else {
    canVote = "You cannot vote.";
}

let str1 = "10";
let str2 = 10;
// Strict equality check condition ()ternary operator "Value if true : Value if false "
let looseEqual = str1 == str2 ? "Loose equal" : "Not loose equal"; // Loose equality
console.log(looseEqual); // Loose equal

//Strict Equality and Inequality Operators
let strictEqual = num1 === num2; // Strict equality
console.log("Strictly equal: " + strictEqual); // false
let strictNotEqual = num1 !== num2; // Strict inequality
console.log("Strictly not equal: " + strictNotEqual); // true
