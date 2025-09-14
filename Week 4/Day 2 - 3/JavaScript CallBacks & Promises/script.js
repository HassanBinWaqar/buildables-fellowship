//Syncronous JavaScript
//in synchoronous javaScript code exceute line by line , even if some function take time other will wait below
console.log(1)
console.log(2)
console.log(3)

//Asynchoronous JavaScript
let exceute = setTimeout(()=>{
    console.log("Hello I'M Async JavaScript Code")
},2000);

console.log("I Execute before the above code because of async nature of JavaScript");

//synchoronous JavaScript CallBack
// this function is the CallBack of Synchorous JavaScript
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,CallBackSum){
    CallBackSum(a,b);
}


calculator(2,2,sum);
// we can do this it will run sum first then the multiplication function
calculator(1,2,function(a,b){
    console.log(a*b);
});


// Note :
//we can not pass sum like sum() because we need to pass the function reference not the result this sum() will execte here if we do so


//Asynchoronous JavaScript
// this function is the CallBack of Asynchoronous JavaScript
function asyncCallback(){
    console.log("Hello I'M Async JavaScript Code");
}

setTimeout(asyncCallback, 2000);

console.log("I Execute before the above code because of async nature of JavaScript");

//what is CallBack Hell??
// CallBack Hell is a situation where we have multiple nested callbacks
// it makes the code hard to read and maintain
// we can avoid CallBack Hell by using Promises or Async/Await

function getData(id,getNextData){
    setTimeout(()=>{
        console.log("Data received for ID:", id);
        if (getNextData){
            getNextData();
        }
    }, 2000);
}

//CallBack Hell
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            console.log("All Data Received");
        });
    });
});


function getCustomerDetails(id , name , getNextCustomer){
    setTimeout(()=>{
        console.log("Customer Details Received for ID:", id);
        console.log("Name:", name);
        if (getNextCustomer){
            getNextCustomer();
        }
    }, 2000);
}

let Customer = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Bob Johnson" }
];

//CallBack Hell
getCustomerDetails(Customer[0].id, Customer[0].name,()=>{
    getCustomerDetails(Customer[1].id, Customer[1].name,()=>{
        getCustomerDetails(Customer[2].id, Customer[2].name,()=>{
            console.log("All Customer Details Received");
        });
    });
});

