console.log("JavaScript Loops!");

//there are five types of loops in JavaScript: for, while, do-while, for-in, and for-of
//1. for loop
let i = 0;
for (i = 0; i < 5; i++) {
    console.log("i is: " + i);
}

//2. for in loop used to iterate over the properties of an object
let person = {fname: "John", lname: "Doe", age: 25};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

//also we can write for in loop like this
    console.log(person.fname);  
    console.log(person.lname);
    console.log(person.age);

//3. for of loop used to iterate over iterable objects like arrays, strings, etc.
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

//for strings
let str = "Hello";
for (let char of str) {
    console.log(char);
}

//4. while loop
// The while loop executes a block of code as long as a specified condition is true
// It checks the condition before executing the block of code
// The loop will continue until the condition becomes false
// Example:
let j = 0;
while (j < 5) {     
    console.log("j is: " + j);
    j++;
}

//5. do while loop
// The do while loop is similar to the while loop, but it guarantees that the block of code will be executed at least once
// It checks the condition after executing the block of code
// Example:
let k = 0;
do {
    console.log("k is: " + k);
    k++;
} while (k < 5);
