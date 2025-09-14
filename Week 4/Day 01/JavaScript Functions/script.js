//Function in JavaScript
//why use functions?
//functions are reusable blocks of code that can be called multiple times, which helps in reducing redundancy and improving maintainability.
function greet(name) {
    console.log("Hello, " + name + "!");
}
//Calling the function
greet("Hassan Bin Waqar");
//Function with return value
function add(a, b) {
    // return a + b;
    // console.log("Adding " + a + " and " + b); it will not return the value, it will just print it
    //console .log returns undefined, so we use return statement to return the value
    return a + b; // This will return the sum of a and b
}
//Calling the function and storing the result
let sum = add(5, 10);
console.log("The sum is: " + sum);


//Function with default parameters
function multiply(a, b, c = 1) {
    return a * b * c;
}
//Calling the function and storing the result
//the value of c is 1 by default, so if we don't pass the value of c, it will be 1
//If we pass the value of c, it will use that value instead of the default value
let product = multiply(5, 10);
console.log("The product is: " + product);
//Calling the function with all parameters
let productWithC = multiply(5, 10, 2);
console.log("The product with c is: " + productWithC);

//Arrow functions
//Arrow functions are a more concise way to write functions in JavaScript.
const subtract = (a, b) => {
    return a - b;
};
//Calling the arrow function
let difference = subtract(10, 5);
console.log("The difference is: " + difference);