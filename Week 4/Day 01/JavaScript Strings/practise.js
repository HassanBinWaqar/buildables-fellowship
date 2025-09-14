console.log(`JavaScript Strings!`); // Output: JavaScript Strings!
let myString = "Hello, World!";
console.log(myString); // Output: Hello, World!
// Using the charAt() method to access a character at a specific index
console.log(`Character at index 7: ${myString.charAt(7)}`); // Output: W    
console.log(`character at index 0: ${myString[0]}`);
// Using the length property to get the length of the string
console.log(`Length of myString: ${myString.length}`); // Output: 13

for (let char of myString){
    console.log(`Character: ${char}`); // Output: H, e, l, l, o, ,,  , W, o, r, l, d, !
}

// Using the indexOf() method to find the index of a substring
console.log(`Index of 'World': ${myString.indexOf("World")}`); // Output: 7
// Using the lastIndexOf() method to find the last occurrence of a character
console.log(`Last index of 'o': ${myString.lastIndexOf("o")}`); // Output: 8
let modifiedString = myString.replace("Hello", "Hi");
console.log(`Original String: ${myString}`); // Output: Hello, World!
console.log(`Modified String: ${modifiedString}`); // Output: Hi, World!

let firstName = "Hassan";

console.log(`First Name: ${firstName.toUpperCase()}`);
console.log(`Modified String: ${modifiedString.toLocaleLowerCase()}`); // Output: Hi, World!

let lastName = "Bin Waqar";
console.log(firstName.slice(0, 3)); // Output: Has
console.log(lastName.slice(0, 3)); // Output: Bin
console.log(firstName.slice(0)); // Output: Hassan
console.log(lastName.slice(0)); // Output: Bin Waqar
console.log(`Full Name: ${firstName} ${lastName}`); // Output: Hassan Bin Waqar
console.log(firstName.concat(" ", lastName," ","programmer")); // Output: Hassan Bin Waqar programmer   

let stringWithWhitespace = "   Hello, World!   ";
console.log(`String with Whitespace: '${stringWithWhitespace}'`);
console.log(`Trimmed String: '${stringWithWhitespace.trim()}'`); // Output: 'Hello, World!'

let newString = "Hello";

console.log(newString.startsWith("H")); // Output: true
console.log(newString.endsWith("o")); // Output: true

console.log(newString.includes("l")); // Output: true
