//arrays in javascript
let fruits = ["apple", "banana", "cherry"];
// Accessing elements
console.log(fruits[0]); // Output: apple
console.log(fruits[1]); // Output: banana
console.log(fruits[2]); // Output: cherry
console.log(fruits[3]);
console.log(fruits);

// Adding elements
fruits.push("date");
console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]
// Removing elements
fruits.pop();
//this removes the last element
console.log(fruits); // Output: ["apple", "banana", "cherry"]

//array are mutable we can change the elements string are immutable
fruits[0] = "kiwi";
console.log(fruits); // Output: ["kiwi", "banana", "cherry"]

console.log(typeof(fruits)); // Output: object
console.log(Array.isArray(fruits)); // Output: true


//changing the array into a string
let fruitsString = fruits.toString();
console.log(fruitsString); // Output: "kiwi,banana,cherry"
console.log("FruitsString isArray: " + Array.isArray(fruitsString)); // Output: false

// Converting back to an array
let newFruitsArray = fruitsString.split(",");
console.log(newFruitsArray); // Output: ["kiwi", "banana", "cherry"]
console.log("NewFruitsArray isArray: " + Array.isArray(newFruitsArray)); // Output: true


//how Array.isArray works
let numbers = [1, 2, 3];
//Array is a Constructor and isArray is a method of the Array object
console.log(typeof(numbers)); // Output: object
console.log(Array.isArray(numbers)); // Output: true



//Join method is used to join all elements of an array into a string
//with a specified separator
let joinedFruits = fruits.join(" - ");
console.log(joinedFruits); // Output: "kiwi - banana - cherry"


//Shifting and unshifting elements
//Shift removes the first element of the array and returns it and pop removes the last element
//Shift is the opposite of unshift
let firstFruit = fruits.shift();
console.log("First fruit is : " + firstFruit); // Output: kiwi
console.log(fruits); // Output: ["banana", "cherry"]

//Unshift adds one or more elements to the beginning of the array
//unshift adds elements to the start of the array and push adds elements to the end
fruits.unshift("apple");
fruits.unshift("orange");
console.log(fruits); // Output: ["orange", "apple", "banana", "cherry"]


//Deleting elements
//Using delete operator removes the element but does not change the length of the array
//memory is not freed
//Interview question: What is the difference between delete and splice?
//delete operator leaves an empty slot in the array
//splice method removes the element and changes the length of the array
//splice method is used to add or remove elements from an array
delete fruits[1];
console.log(fruits); // Output: ["orange", <1 empty item>, "banana", "cherry"]
console.log(fruits.length); // Output: 4

//Using splice to remove elements
//how splice works
fruits.splice(0, 2); // Removes 2 elements starting at index 0
//what (0,2) means is start at index 0 and remove 2 elements
console.log(fruits); // Output: ["banana", "cherry"]



//Using splice to add elements
//how splice works
//what (1,0,"kiwi","mango") means is start at index 1 and remove 0 elements and add "kiwi" and "mango"
//This will insert "kiwi" and "mango" at index 1 without removing any elements
fruits.splice(1, 0, "kiwi", "mango"); // Adds "kiwi" and "mango" at index 1
console.log(fruits); // Output: ["banana", "kiwi", "mango", "cherry"]

//using splice to replace elements
//what (2,1,"orange") means is start at index 2 and remove 1 element and add "orange"
fruits.splice(2, 1, "orange"); // Replaces "mango" with "orange"
console.log(fruits); // Output: ["banana", "kiwi", "orange", "cherry"]


//Concatenating arrays
//it does not change the original arrays
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
console.log(c); // Output: [1, 2, 3, 4, 5, 6]
console.log(a); // Output: [1, 2, 3]
console.log(b); // Output: [4, 5, 6]


//sorting arrays
let numbersArray = [5, 3, 8, 1, 2];
numbersArray.sort();
console.log(numbersArray); // Output: [1, 2, 3, 5, 8]
// Sorting with a custom comparator function in simple way
//how sort works
//what this means ((a, b) => b - a) means sort in descending order
// If you want to sort in ascending order, use ((a, b) => a - b)
//what is (a,b) => this arrow function syntax
//a and b are the two elements being compared
numbersArray.sort((a, b) => b - a);
console.log(numbersArray); // Output: [8, 5, 3, 2, 1]


//Slicing arrays
let arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(1, 4);
console.log(sliced); // Output: [2, 3, 4]


//reversing arrays
let reversed = arr.reverse();
console.log(reversed); // Output: [5, 4, 3, 2, 1]

//Finding elements in arrays
let index = arr.indexOf(3);
console.log(index); // Output: 2

//Checking if an element exists in the array
let exists = arr.includes(4);
console.log(exists); // Output: true

let myNewarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let cube = myNewarray.map((e)=> e ** 3).filter((e) => e > 100 && e < 1000);
console.log(cube); // Output: [125, 216, 343, 512, 729]

let numbersArray2 = [10, 20, 30, 40, 50];
let reduced = numbersArray2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(reduced); // Output: 150

let forEachArray = [1, 2, 3, 4, 5];
forEachArray.forEach((element, index) => {
  console.log(`Element at index ${index} is ${element}`); // Output: Element at index 0 is 1, Element at index 1 is 2, etc.
});

//factorial using reduce

let factorialArray = [1, 2, 3, 4, 5];
let factorial = factorialArray.reduce((accumulator, currentValue) => {  
    return accumulator * currentValue;
    }, 1); // Initial value is 1 for multiplication
console.log(`Factorial: ${factorial}`); // Output: 120