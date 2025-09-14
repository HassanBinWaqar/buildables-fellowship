//JavaScript Strings functions and declarations

let myString = "Hello, World!";
console.log(myString); // Output: Hello, World!
console.log(myString.length); // Output: 13
console.log(myString.toUpperCase()); // Output: HELLO, WORLD!
console.log(myString.toLowerCase()); // Output: hello, world!


console.log(myString[0]); // Output: H
console.log(myString[1]); // Output: e
console.log(myString.indexOf("World")); // Output: 7
console.log(myString.lastIndexOf("o")); // Output: 8

//template literals use backticks
// String interpolation means embedding variables or expressions within a string.
// Template literals allow for multi-line strings and string interpolation.
let real_name = "Hassan";
let greeting = `Hello, ${real_name}!`;
console.log(greeting); // Output: Hello, Hassan!
// String concatenation
let firstName = "Hassan"; 
let lastName = "Bin Waqar";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: Hassan Bin Waqar


//String Slicing
console.log(`Slicing this String: ${myString}`);// The slice() method extracts a section of a string and returns it as a new string.
// It takes two parameters: the starting index and the ending index (not included).
// If the ending index is not provided, it slices to the end of the string.
let slicedString = myString.slice(0, 5); // Slicing from index 0 to index 5 (not included)
// This will extract the substring "Hello" from "Hello, World!"
console.log(`Sliced String: ${slicedString}`); // Output: Hello


// String Replacement
// The replace() method replaces a specified value with another value in a string.
//if the value has multiple occurrences, only the first occurrence will be replaced.
// It takes two parameters: the value to be replaced and the new value.
let replacedString = myString.replace("World", "Universe"); // Replacing "World" with "Universe"
console.log(`Replaced String: ${replacedString}`); // Output: Hello, Universe

//String Concatenation
// The concat() method is used to join two or more strings together.
let string1 = "Hello";
let string2 = "World";
let concatenatedString = string1.concat(", ", string2, "!"); // Concatenating strings with a comma and space
console.log(`Concatenated String: ${concatenatedString}`); // Output: Hello World!

// String Trimming
// The trim() method removes whitespace from both ends of a string.
let stringWithWhitespace = "   Hello, World!   ";
let trimmedString = stringWithWhitespace.trim();
console.log(`Trimmed String: '${trimmedString}'`); // Output: 'Hello, World!'

//String is Immutable
// Strings in JavaScript are immutable, meaning that once a string is created, it cannot be 
// changed. Any operation that appears to modify a string actually creates a new string.
let originalString = "Hello";
let modifiedString = originalString.replace("H", "J"); // Replacing 'H' with 'J'
console.log(`Original String: ${originalString}`); // Output: Hello


//Practice Exercise
// 1. Create a string variable and perform various string operations on it.
let practiceString = "JavaScript is fun!";
console.log(`Original Practice String: ${practiceString}`); // Output: JavaScript is fun

let practiceUpperCase = (practiceString.startsWith("JavaScript")) ? practiceString.toUpperCase() : practiceString;
console.log(`Uppercase Practice String: ${practiceUpperCase}`); // Output: JAVASCRIPT IS FUN!

let practiceLowerCase = (practiceString.endsWith("fun!")) ? practiceString.toLowerCase() : practiceString;
console.log(`Lowercase Practice String: ${practiceLowerCase}`); // Output: javascript is fun!

let practiceSliced = (practiceString.includes("fun")) ? practiceString.slice(0, 10) : practiceString;
console.log(`Sliced Practice String: ${practiceSliced}`); // Output: JavaScript

let practiceReplaced = (practiceString.charAt(0) === 'J') ? practiceString.replace("fun", "awesome") : practiceString;
console.log(`Replaced Practice String: ${practiceReplaced}`); // Output: JavaScript is awesome! 


//Practice Exercise 2
// 2. Create a string variable and use template literals to create a greeting message.

let userName = "Hassan";
let userGreetings = () =>{
    return `Welcome to the world of JavaScript, ${userName}!`;
};
console.log(userGreetings()); // Output: Welcome to the world of JavaScript, Hassan!

let charAccess = userName[0]; // Accessing the first character of the string
console.log(`First character of userName: ${charAccess}`); // Output: H

//for in loop to iterate through each character in the string
for (let index in userName) {
    console.log(`Character at index ${index}: ${userName[index]}`); // Output: H, a, s, s, a, n
}

//for of loop to iterate through each character in the string
for (let char of userName) {
    console.log(`Character: ${char}`); // Output: H, a, s, s, a, n
}

//which loop is used to itrate objects
//for in loop is used to iterate over the properties of an object
//for of loop is used to iterate over the values of an iterable object (like arrays, strings, etc.)

//forEach loop is used to iterate over arrays
let array = ["Hassan", "Bin", "Waqar"];
array.forEach((element, index) => {
    console.log(`Element at index ${index}: ${element}`); // Output: Hassan, Bin, Waqar
});

