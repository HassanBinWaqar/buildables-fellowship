//promises are used to overcome callBack Hell problem
//promise is for eventual completion which means it will complete in future or never
//promise is object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value  (if it worked) or handles an error (if it failed).

//promise has three states
//1. Pending: Initial state, neither fulfilled nor rejected.
//2. Fulfilled: The operation completed successfully.
//3. Rejected: The operation failed.

//the result of promise is passed in the resolve() or reject() function
//Like resolve (value) or reject (error)

//let create one promise

// let myPromise = new Promise((resolve, reject) => {
//     // Do some asynchronous operation
//     let success = true; // Simulate success or failure
//     if (success) {
//         resolve("Operation completed successfully");
//     } else {
//         reject("Operation failed");
//     }
// });

//this below we consider an API that sends us Data after 5 seconds when we call it in browser console
//before 5 seconds the promise state is pending after that it will be either fulfilled or rejected
// let newPromise = new Promise((resolve, reject) => {
//     // Simulate an asynchronous operation
//     setTimeout(() => {
//         let success = true; // Simulate success or failure
//         if (success) {
//             resolve("New promise completed successfully");
//         } else {
//             reject("New promise failed");
//         }
//     }, 5000);
// });

//we usually do not create promises manually like this , but we use built-in APIs that return promises
//after that when we call the API, we can use .then() to handle the fulfilled state and .catch() to handle the rejected state

//let consider simple scenario

// const promise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a recently fetched promise ...");
//     //   resolve("Fetched data");
//     reject("Error fetching data");
//   });
// };

// let getPromise = promise();

// getPromise.then((data) => {
//   console.log(data);
// });

// getPromise.catch((error) => {
//   console.log(error);
// });

// // //promise chaining

// function asyncFun1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Async Function 1 Completed");
//       resolve();
//     }, 1000);
//   });
// }
// function asyncFun2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Async Function 2 Completed");
//       resolve();
//     }, 1000);
//   });
// }

// function asyncFun3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Async Function 3 Completed");
//       resolve();
//     }, 1000);
//   });
// }

// //chaining the promises
// let data1 = asyncFun1();
// data1.then(()=>{
//     let data2 = asyncFun2();
//     data2.then(()=>{
//         let data3 = asyncFun3();
//         data3.then(()=>{
//             console.log("All Async Functions Completed");
//         });
//     });

// });

// asyncFun1()
//     .then(() => asyncFun2())
//     .then(() => asyncFun3())
//     .then(() => {
//         console.log("All Async Functions Completed");
//     });

//we can also write this in a more concise way

    // asyncFun1().then(() => {
    //   asyncFun2().then(() => {
    //     asyncFun3().then(() => {
    //       console.log("All Async Functions Completed");
    //     });
    //   });
    // });



//Task : Solve previous CallBack Hell Using Promise Chaining
function getCustomerDetailsPromise(CustomerId,CustomerName){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Customer Details Fetched");
//why i use braces with resolve ???
//because resolve only accept one value so if i do not add braces it will only return first value
//but when i add the braces it will return an object with both values
            resolve({CustomerId,CustomerName});
        },2000);
    });
}

// getCustomerDetailsPromise(1,"John Doe").then((customer)=>{
//     console.log(customer);
//      getCustomerDetailsPromise(2,"Jane Doe").then((customer)=>{
//         console.log(customer);
//      getCustomerDetailsPromise(3,"Jim Doe").then((customer)=>{
//             console.log(customer);
//         });
//     });
// });

//this is called flat promise chaining we can chain using 2 ways :
// 1: Inside the .then 
//2: Returning the promise using flat chaining
getCustomerDetailsPromise(1,"John Doe").then((customer)=>{
    console.log(customer);
    return getCustomerDetailsPromise(2,"Jane Doe");
}).then((customer)=>{
    console.log(customer);
    return getCustomerDetailsPromise(3,"Jim Doe");
}).then((customer)=>{
    console.log(customer);
});