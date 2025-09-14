console.log(`Practice File`);
let idDetails = [21460, 21315, 21300];
console.log(`Gym id Details ${idDetails}`);

let joinedetails = idDetails.join(" and ");
console.log(joinedetails);
console.log(typeof `join convert array object into string : ${joinedetails}`);
console.log(`original array type : ${typeof idDetails}`);

console.log(`Array.isArray(idDetails) : ${Array.isArray(idDetails)}`); // Output: true
console.log(`Array.isArray(joinedetails) : ${Array.isArray(joinedetails)}`); // Output: false

//push and pop
let fruits = ["apple", "banana", "cherry"];
//it push the element at the end of the array
fruits.push("date");
console.log(`After push: ${fruits}`); // Output: ["apple", "banana", "cherry", "date"]

//it pop the last element of the array
fruits.pop();
console.log(`After pop: ${fruits}`); // Output: ["apple", "banana", "cherry"]

//shift and unshift
//shift removes the first element of the array
let firstFruit = fruits.shift();
console.log(`First fruit removed: ${firstFruit}`); // Output: apple
console.log(`After shift: ${fruits}`); // Output: ["banana", "cherry"]

//unshift adds one or more elements to the beginning of the array
fruits.unshift("orange");
console.log(`After unshift: ${fruits}`); // Output: ["orange", "banana", "cherry"]

// Converting array to string and back
//join method is used to join all elements of an array into a string with a specified separator
let fruitsString = fruits.join(" - ");
console.log(`Fruits string: ${fruitsString}`); // Output: "orange - banana - cherry"

//split method is used to split a string into an array of substrings
let fruitsArray = fruitsString.split(" - ");
console.log(`Fruits array: ${fruitsArray}`); // Output: ["orange", "banana", "cherry"]

//deleting elements
//delete operator removes an element from an array but does not change the length of the array

delete fruitsArray[1]; // This will remove the element at index 1
console.log(`After delete: ${fruitsArray}`); // Output: ["orange", undefined, "cherry"]
//length property
console.log(`Length of fruitsArray: ${fruitsArray.length}`); // Output: 3

// Using splice to remove elements
//splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements
fruitsArray.splice(1, 1); // This will remove the element at index 1
console.log(`After splice: ${fruitsArray}`); // Output: ["orange", "cherry"]
//length property after splice
console.log(`Length of fruitsArray after splice: ${fruitsArray.length}`); // Output: 2

// Using splice to add elements
fruitsArray.splice(0, 0, "kiwi", "mango"); // This will insert "kiwi" and "mango" at index 0 without removing any elements
console.log(`After adding elements with splice: ${fruitsArray}`); // Output: ["kiwi", "mango", "orange", "cherry"]

//Slice
//slice method returns a shallow copy of a portion of an array into a new array object
//selected from start to end (end not included) where start and end represent the index of items in that array
let arraySlice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let slicedArray = arraySlice.slice(2, 5); // This will return elements from index 2 to 4
console.log(`Sliced array: ${slicedArray}`); // Output: [3, 4, 5]
slicedArray.toString(); // Convert to string
console.log(`Sliced array as string: ${slicedArray.toString()}`); // Output: "3,4,5"
//why it is array objet even after converting to string
//because toString method does not change the original array, it just returns a string representation of the array
console.log(`Sliced array type: ${typeof slicedArray}`); // Output:    object
// i wanted to chnage the original array to string
slicedArray = slicedArray.toString(); // Now it is a string
console.log(`Sliced array after toString: ${slicedArray}`); // Output: "3,4,5"
console.log(`Sliced array type after toString: ${typeof slicedArray}`); // Output: string

// Converting back to an array
let newFruitsArray = fruitsString.split(" - ");
console.log(`NewFruitsArray: ${newFruitsArray}`); // Output: ["orange", "banana", "cherry"]
console.log(`NewFruitsArray isArray: ${Array.isArray(newFruitsArray)}`); // Output: true

//indexOf and lastIndexOf
let indexOfBanana = fruits.indexOf("banana");
console.log(`Index of banana: ${indexOfBanana}`); // Output: 1

//map
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map((num) => {
  return num ** 2;
});

console.log(`Squared numbers: ${squaredNumbers}`); // Output: [1, 4, 9, 16, 25]

let numbersString = "1, 2, 3, 4, 5";
let changedNumbers = numbersString.split(",");

console.log(changedNumbers); // Output: ["1", "2", "3", "4", "5"]

let shopNames = "Bakery,Cafe,Store";
let randomAdjectives = shopNames.split(",");
console.log(randomAdjectives);

let spliced = randomAdjectives.splice(0,2, "Fancy", "Local");
console.log(randomAdjectives); // Output: ["Bakery", "Fancy", "Local", "Cafe", "Store"]


let array = [1, 2, 3, 4, 5,100,50,1000,300];

let sorted = array.sort((X,Y)=>{
    return Y - X;
});
console.log(sorted); // Output: [1000, 300, 100, 50, 5, 4, 3, 2, 1]


//loop 
// let array1= [1, 2, 3, 4, 5];
// array1.forEach((element,index)=>{
//     console.log(`Element at index ${index} is ${element}`); // Output: Element at index 0 is 1, Element at index 1 is 2, etc.
// })


//filter 


let myNewarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredArray = myNewarray.filter((num) => {
  return num >=5;
});

console.log(`Filtered array: ${filteredArray}`); // Output: [5, 6, 7, 8, 9, 10]

//we can also use a,b or any other variable names instead of accumulator and currentValue
//reduce
let ReducedArray = myNewarray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
},0);// Initial value is 0 for addition
// //reduce
// let ReducedArray = myNewarray.reduce((a, b => {
//   return a + b
// },0);// Initial value is 0 for addition

console.log(`Reduced array: ${ReducedArray}`); // Output: 1+2+3+4+5+6+7+8+9+10


//array.from
let newString = "Hello";
let stringArray = Array.from(newString);
console.log(stringArray); // Output: ["H", "e", "l", "l", "o"]