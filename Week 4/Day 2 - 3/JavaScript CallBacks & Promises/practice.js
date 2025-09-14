console.log("Asynchronous JavaScript...");
console.log("Async Await >> Promise chaining >> Callback Hell");

//what is synchronous && asynchronous in JavaScript?

// 1: Synchronous
// In a synchronous operation, tasks are performed one after another. Each task must complete before the next one begins. This can lead to blocking behavior, where the execution of code is halted until a task is finished.

// 2: Asynchronous
// In an asynchronous operation, tasks can be initiated and then continue to run in the background, allowing other code to execute without waiting for the task to complete. This is often achieved using callbacks, promises, or async/await syntax.

setTimeout(() => {
    console.log("Async operation complete");
}, 2000);

//we can write the following code like this
// function hello(){
//     console.log("Hello World");
// }

// setTimeout(hello, 2000);


//synchronous programming callbacks

function sum(a, b, callback) {
    callback(a,b);
}

function calculator(a,b){
  const result = a + b;
  console.log(result);
}

sum(5, 10, calculator); //we can pass the callback function directly

//both work the same way 
sum(5,10 , (a,b) => {
  const result = a + b;
  console.log(result);
});


//asynchronous programming callbacks

function getClientData(clientId, callback) {
    setTimeout(() => {
        const clientData = { id: clientId, name: "John Doe" };
        callback(clientData);
    }, 2000);
}
getClientData(1, (data) => {
    console.log(data);
    // Process the client data
    getClientData(2, (data) => {
        console.log(data);
        getClientData(3, (data) => {
            console.log(data);
        });
    });
});


//Promises are used to solve the callBackHell Problem

function getClientData(clientId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            // const clientData = { id: clientId, name: "John Doe" };
            // resolve(clientData);
            reject("Error fetching client data");
        }, 5000);
    });
}

//if the promise is resolved .then runs if not then catch runs
getClientData(1)
    .then((data) => {
        console.log(data);
        // Process the client data
        return getClientData(2);
    })
    .then((data) => {
        console.log(data);
        return getClientData(4);
    })
    .then((data) => {
        console.log(data);
    })
//.catch() is used to handle the error
    .catch((error) => {
        console.log("An error occurred:", error);
    });




//Async Await
//Async Await is a syntactic sugar over promises
//Async function always returns a promise
//when we write async before a function it means that the function will always return a promise
//await is used to wait for the promise to resolve

function api(){
    return new Promise((resolve) => {
    setTimeout(() => {
       console.log("Fetching data from API...");
       resolve("Success");
    }, 4000);
}
);
}

// async function fetchData(){
//     console.log("Before calling API");
//    let val =  await api(); //waits for the promise to resolve
//     console.log("After calling API");
//    return val;
// }

// fetchData(); //calling the async function

(async () => {
  const result = await api();
  console.log("Result from API:", result);
})();
console.log("End of the script");


//Syntax Improving with Async Await

function getClientData(clientId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const clientData = { id: clientId, name: "John Doe" };
            resolve(clientData);
        }, 2000);
    });
}

// async function fetchClientData() {
//     try {
//         const data1 = await getClientData(1);
//         console.log(data1);
//         const data2 = await getClientData(2);
//         console.log(data2);
//         const data3 = await getClientData(3);
//         console.log(data3);
//     } catch (error) {
//         console.log("An error occurred:", error);
//     }
// }
// fetchClientData();

//the above code is same as the below code

(async () => {
    try {
        const data1 = await getClientData(1);
        console.log(data1);
        const data2 = await getClientData(2);
        console.log(data2);
        const data3 = await getClientData(3);
        console.log(data3);
    } catch (error) {
        console.log("An error occurred:", error);
    }
})();