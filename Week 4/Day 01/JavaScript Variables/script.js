console.log("Hello, World!");

// This is a simple JavaScript program that declares variables and displays them in the console
var myName = "Hassan Bin Waqar";
var myAge = 25;
var myCity = "Karachi";

// Displaying the variables in the console
console.log("Name: " + myName);
console.log("Age: " + myAge);
console.log("City: " + myCity);


// Displaying the types of the variables
console.log(typeof myName); // string
console.log(typeof myAge); // number    
console.log(typeof myCity); // string


// Demonstrating variable scope with var and let
// Variables declared with var are function-scoped or globally scoped, while let is block-scoped
if (true) {
  var message = "Hello from var!";
}
console.log(message); // ✅ "Hello from var!"

// Variables declared with let are block-scoped, so they are not accessible outside the block
// Uncommenting the next line will cause an error because message is not defined outside the block
if (true) {
  let message = "Hello from let!";
  console.log(message); // ✅ "Hello from let!"
}

console.log(message); // ❌ ReferenceError: message is not defined

console.log("End of script");


//primitive data types
let myString = "Hello, World!"; // String       
let myNumber = 42; // Number
let myBoolean = true; // Boolean
let myNull = null; // Null
let myUndefined; // Undefined

console.log(myString,myNumber,myBoolean,myNull,myUndefined);
console.log(typeof myString, typeof myNumber, typeof myBoolean, typeof myNull, typeof myUndefined);

//the type of myNull is an object, which is a known JavaScript quirk (Mistake)
console.log(typeof myNull); // object


//non-primitive data types
let myArray = [1, 2, 3, 4, 5]; // Array
let myObject = { name: "John", age: 30 }; // Object
console.log(myArray, myObject);

//chnaging the value of a variable in oject
myObject.age = 31; // Changing the value of a property in an object
console.log(myObject); // { name: "John", age: 31 }
