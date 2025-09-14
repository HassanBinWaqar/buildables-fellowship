// //Methods // to target elements in the DOM
// //getElementById
// // it is used to target specific single element
// let box = document.getElementById("b1");
// box.style.backgroundColor = "red";
// //getElementsByClassName
// // it is used to target multiple elements with the same class name
// // it returns an HTML collection which is similar to an array but not exactly an array
// // it is a live collection which means if we add or remove elements it will update automatically
// // it is not an array so we cannot use array methods like forEach, map, filter
// //getElementsByTagName
// // it is used to target multiple elements with the same tag name
// let boxTag = document.getElementsByTagName("div");
// // it returns an HTML collection which is similar to an array but not exactly an array
// // it is a live collection which means if we add or remove elements it will update automatically
// // it is not an array so we cannot use array methods like forEach, map, filter
// // we can use it to target all the div elements in the document
// boxTag[0].style.backgroundColor = "blue";
// boxTag[1].style.backgroundColor = "green";
// boxTag[2].style.backgroundColor = "yellow";
// boxTag[3].style.backgroundColor = "pink";
// //getElementsByClassName
// // it is used to target multiple elements with the same class name
// // it returns an HTML collection which is similar to an array but not exactly an array
// // it is a live collection which means if we add or remove elements it will update automatically
// // it is not an array so we cannot use array methods like forEach, map, filter



// //when we target from class we target all the elemets belongs to that class 
// //if we target one element using class like boxStyle[2] , if we add another box in between that box get the property of previous box because we target index [2] not the specific element
// let boxStyle = document.getElementsByClassName("box");
// //this will chnage the one box color 
// boxStyle[2].style.backgroundColor = "orange"
// console.log(boxStyle);

// //the console .log returns the html collection in array form if we want to chnage the color of all the boxes we need to itrate like and array

// // way one using querySelector 
// // document.querySelectorAll(".box").forEach((e)=>{
// //  e.style.backgroundColor = "pink"
// // })

// // way two my making an htmlCollection to an array 
// Array.from(boxStyle).forEach(element => {
//     element.style.backgroundColor = "pink";
// });


// //get Eelement by ID
// // it is used to target specific single element 

// let boxBYID = document.getElementById("b2");
// boxBYID.style.border = "2px solid black"
// boxBYID.style.backgroundColor = "purple"



//practice

// it select specif element with this id
document.getElementById("b2").style.backgroundColor = "pink";

// it select all elements with this class name because it return html collection so we need to convert it to an array in order to itrate it
Array.from(document.getElementsByClassName("box")).forEach(element => {
    element.style.backgroundColor = "maroon";
});

// it select class box first element if id we use # here is class so we use .
document.querySelector(".box").style.fontSize = "30px";


// to change the style of all elements with the class name "box" using querySelectorAll

//this reutrns nodeList so we can use forEach
// but if we use this with getElementsByClassName it will return htmlCollection so we need to first convert it to an array beacuse html collection does not have forEach method
document.querySelectorAll(".box").forEach((element) => {
    element.style.border = "2px solid black";
    element.style.padding = "50px";
    element.style.margin = "5px";
});


// it targets html tags and return html collection
document.getElementsByTagName("div");


// it targets elements by name attribute
// it returns an nodeList.
document.getElementsByName("hassan").forEach((e)=> e.style.backgroundColor = "lightblue");



//matches , closest & contains
// matches is used to check if the element matches the given css selector (id or class)
let box = document.getElementById("b2");
// it returns true or false
console.log(box.matches(".box")); // true
console.log(box.matches("#b2")); // true
console.log(box.matches("#b3")); // false

// closest is used to find the closest ancestor of the element that matches the given css selector
console.log(box.closest(".container")); // it will return the closest ancestor with class container
// if there is no ancestor that matches the given css selector it will return null
//this means search for the closest ancestor with the id b3
console.log(box.closest("#b3")); // null, because there is no ancestor with id b



// contains is used to check if the element contains the given element
let container = document.querySelector(".container");
// it returns true or false
console.log(container.contains(box)); // true, because the container contains the box element
// if we check for an element that is not in the container it will return false
console.log(container.contains(document.getElementById("b3"))); // false, because the container does not contain the element with id b3