//async & await basically these are two keywords in js that helps us to work with asynchronous code more easily
//we can use async before a function to make it return a promise
//we can use await inside an async function to wait for a promise to resolve

//example

function getCustomerDetails(id , name){
    return new Promise((resolve) => {
        setTimeout(()=>{
            console.log("Customer Details Received for ID:", id);
            console.log("Name:", name);
            resolve();
        }, 2000);
    });
}

let Customer = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" }
];

async function fetchCustomerDetails() {
    //await keyword only wait for the promise to resolve if we do not return promise then all three data display together not one by one 
        await getCustomerDetails(Customer[0].id, Customer[0].name);
        await getCustomerDetails(Customer[1].id, Customer[1].name);
        await getCustomerDetails(Customer[2].id, Customer[2].name);
        //the execution will pause here until all customer details are fetched
        console.log("All customer details fetched from inside the async function.");
}


fetchCustomerDetails();

//this will print before the async function completes
console.log("All customer details fetched.");


//let here understand a new concept IIFE (Immediately Invoked Function Expression)
//why use IIFE?
//1. To create a new scope what this means ?? - It means that variables defined within the IIFE are not accessible from outside it, preventing naming conflicts.
//2. To avoid polluting the global scope what this means ?? - It means that variables defined within the IIFE do not interfere with variables in the global scope.
//3. To execute code immediately what this means ?? - It means that the code inside the IIFE runs as soon as it is defined.


//IIFE functions are basically without a name and are executed immediately after they are defined.

(async function () {
    //await keyword only wait for the promise to resolve if we do not return promise then all three data display together not one by one 
        await getCustomerDetails(Customer[0].id, Customer[0].name);
        await getCustomerDetails(Customer[1].id, Customer[1].name);
        await getCustomerDetails(Customer[2].id, Customer[2].name);
        //the execution will pause here until all customer details are fetched
        console.log("All customer details fetched from inside the async function.");
})();

//unnecessary call avoid
// fetchCustomerDetails();

//why we donot use named IIFE?
//1. Limited use case - Named IIFEs are rarely needed because the primary purpose of an IIFE is to create a new scope and execute code immediately. In most cases, an anonymous function suffices.
//2. Readability - Using anonymous functions can make the code cleaner and easier to read, as it avoids unnecessary naming.
//3. Avoiding naming conflicts - If a named IIFE is defined with a name that conflicts with other variables or functions in the scope, it can lead to confusion or errors.