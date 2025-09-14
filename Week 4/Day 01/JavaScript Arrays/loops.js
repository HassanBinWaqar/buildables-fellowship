//Loops using array
let fruits = ["apple", "banana", "cherry"];
// Using for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

fruits.forEach((Element, index) => {
    console.log(`Element at index ${index} is ${Element}`); 
});


//for of loop
console.log("Using for of loop:");
// This loop iterates over the values of the array
for (let fruit of fruits) {
    console.log(`Element is ${fruit}`);
}

//what is map , filter, reduce

let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//using for loop
let evenNumbers = [];
for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] % 2 === 0) {
        evenNumbers.push(newArray[i]);
    }
}

console.log("Even numbers using for loop: " + evenNumbers); // Output: [2, 4, 6, 8, 10]

//using map 

// map creates a new array with the results of calling a provided function on every element in the calling array
// how map works
// map does not change the original array
// it returns a new array with the results of the function
let evenNumbersMap = newArray.map((num) => {
    if (num % 2 === 0) {
        return num;
    }
}).filter(Boolean); // filter(Boolean) removes undefined values

console.log("Even numbers using map: " + evenNumbersMap); // Output: [2, 4, 6, 8, 10]


//practice map

let arr = [1, 2, 3, 4, 5];
let squaredArray = arr.map((num) => {
    return num**2;
});

//let cubedArray = arr.map((num)=> num **3);
//we can also use arrow function shorthand
//cubedArray will contain the cubes of the elements in arr
//why we donot return in shorthand
//because the arrow function syntax allows us to omit the return keyword when there is only one expression
//what this means is that the expression after the arrow will be returned automatically
//this is called implicit return
//what if we want to return an object
//we need to wrap the object in parentheses
let cubedArray = arr.map((num) => {
    return num ** 3;
});
console.log("Cubed array using map: " + cubedArray); // Output: [1, 8, 27, 64, 125]
console.log("Squared array using map: " + squaredArray); // Output: [1, 4, 9, 16, 25]

//map usiing strings
let stringArray = ["apple", "banana", "cherry"];
//place any variable inside the map function like we can write e or str 
let upperCaseArray = stringArray.map((e) => e.toUpperCase());
console.log("Uppercase array using map: " + upperCaseArray); // Output: ["APPLE", "BANANA", "CHERRY"] 



let oddNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 18, 20];


let extractedOddNumbers = oddNumbers.map((numArray)=>{
    return numArray % 2 !== 0 ? numArray : null;
})

console.log(typeof extractedOddNumbers); // Output: object
// The map method returns an array, so the type is 'object' in JavaScript
//i wanted to see the list in form of array
extractedOddNumbers = extractedOddNumbers.filter(Boolean); // Remove null values
// filter(Boolean) removes all falsy values (null, undefined, 0, false, NaN, "")
// This will give us an array of odd numbers
// Now extractedOddNumbers will only contain the odd numbers from the original array
console.log("Extracted Odd Numbers: " + extractedOddNumbers);


//filter
//filter creates a new array with all elements that pass the test implemented by the provided function\
let arrayFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredArray = arrayFilter.filter((num) => {
    let haveEven=num % 2 === 0; // This will return only even numbers
    console.log(haveEven);
    return haveEven;
});
console.log(filteredArray); // Output: [2, 4, 6, 8, 10]


let vowels = ["a", "e", "i", "o", "u"];
let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
let alphabet = vowels.concat(consonants); // Concatenating vowels and consonants
console.log(alphabet); // Output: ["a", "e", "i", "o", "u", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
// Using filter to get only vowels from the alphabet
let filteredVowels = alphabet.filter((letter) => {
    let haveInclude=vowels.includes(letter); 
    console.log(haveInclude);
    return haveInclude;
});

console.log(filteredVowels);


//Reduce
//reduce executes a reducer function on each element of the array, resulting in a single output value
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // Initial value is 0
console.log("Sum using reduce: " + sum); // Output: 15

//what is accumulator in simple words
// The accumulator is a variable that accumulates the results of the reducer function as it iterates
// through the array. It starts with the initial value (0 in this case) and is updated with each iteration.
// For example, in the first iteration, the accumulator is 0 and the current value is 1, so it becomes 1.
// In the second iteration, the accumulator is 1 and the current value is 2, so it becomes 3, and so on.

//why use reduce
// Reduce is useful for transforming an array into a single value, such as a sum, product, or any other aggregation.